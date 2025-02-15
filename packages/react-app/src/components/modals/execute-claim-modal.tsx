/* eslint-disable no-nested-ternary */
import { Button, IconCaution, IconCoin, Info } from '@1hive/1hive-ui';
import { noop, uniqueId } from 'lodash-es';
import { useEffect, useMemo, useState } from 'react';
import { ENUM, ENUM_CLAIM_STATE, ENUM_TRANSACTION_STATUS } from 'src/constants';
import { useTransactionContext } from 'src/contexts/transaction.context';
import { useWallet } from 'src/contexts/wallet.context';
import { ClaimModel } from 'src/models/claim.model';
import { TokenAmountModel } from 'src/models/token-amount.model';
import { TransactionModel } from 'src/models/transaction.model';
import { computeTransactionErrorMessage } from 'src/utils/errors.util';
import { compareCaseInsensitive } from 'src/utils/string.util';
import { GUpx } from 'src/utils/style.util';
import styled from 'styled-components';
import * as QuestService from '../../services/quest.service';
import { AddressFieldInput } from '../field-input/address-field-input';
import AmountFieldInput from '../field-input/amount-field-input';
import { Outset } from '../utils/spacer-util';
import ModalBase, { ModalCallback } from './modal-base';

// #region StyledComponents

const OpenButtonStyled = styled(Button)`
  margin: ${GUpx(1)};
  width: fit-content;
`;

const OpenButtonWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const OnlyStackholderWarnStyled = styled(Info)`
  padding: ${GUpx(1)};
  margin-top: ${GUpx(4)};
  display: flex;
  align-items: center;
`;

const WarningIconContainerStyled = styled.div`
  width: 32px;
`;

// #endregion

type Props = {
  claim: ClaimModel;
  questTotalBounty?: TokenAmountModel | null;
  claimable: boolean;
  onClose?: ModalCallback;
};

export default function ExecuteClaimModal({
  claim,
  questTotalBounty,
  onClose = noop,
  claimable,
}: Props) {
  const [opened, setOpened] = useState(false);
  const [amount, setAmount] = useState<TokenAmountModel>();
  const { setTransaction } = useTransactionContext();
  const { walletAddress } = useWallet();
  const modalId = useMemo(() => uniqueId('execute-claim-modal'), []);

  useEffect(() => {
    if (questTotalBounty) {
      if (claim.claimAll) setAmount(questTotalBounty);
      else setAmount(claim.claimedAmount); // Claim all funds
    }
  }, [claim.claimedAmount, questTotalBounty]);

  const closeModal = (success: boolean) => {
    setOpened(false);
    onClose(success);
  };

  const claimTx = async () => {
    try {
      let txPayload = {
        modalId,
        estimatedDuration: ENUM.ENUM_ESTIMATED_TX_TIME_MS.ClaimExecuting,
        message: 'Claiming bounty',
        status: ENUM_TRANSACTION_STATUS.WaitingForSignature,
        type: 'ClaimExecute',
        args: { questAddress: claim.questAddress, containerId: claim.container!.id },
      } as TransactionModel;
      setTransaction(txPayload);
      const txReceipt = await QuestService.executeQuestClaim(walletAddress, claim, (txHash) => {
        txPayload = { ...txPayload, hash: txHash };
        setTransaction({
          ...txPayload,
          status: ENUM_TRANSACTION_STATUS.Pending,
        });
      });
      setTransaction({
        ...txPayload,
        status: txReceipt?.status
          ? ENUM_TRANSACTION_STATUS.Confirmed
          : ENUM_TRANSACTION_STATUS.Failed,
      });
      if (!txReceipt?.status) throw new Error('Failed to execute claim');
    } catch (e: any) {
      setTransaction(
        (oldTx) =>
          oldTx && {
            ...oldTx,
            status: ENUM_TRANSACTION_STATUS.Failed,
            message: computeTransactionErrorMessage(e),
          },
      );
    }
  };

  return (
    <>
      <ModalBase
        id={modalId}
        title="Claim quest bounty"
        openButton={
          <OpenButtonWrapperStyled>
            <OpenButtonStyled
              onClick={() => setOpened(true)}
              icon={<IconCoin />}
              label="Execute"
              mode="positive"
              title={
                !claimable
                  ? 'Wait for the delay period to end before claiming...'
                  : questTotalBounty &&
                    claim.claimedAmount.parsedAmount > questTotalBounty?.parsedAmount
                  ? 'Not enough funds in Quest to claim'
                  : 'Open quest claim'
              }
              disabled={
                !questTotalBounty ||
                claim.claimedAmount.parsedAmount > questTotalBounty?.parsedAmount ||
                !claimable
              }
            />
          </OpenButtonWrapperStyled>
        }
        buttons={
          <Button
            onClick={claimTx}
            icon={<IconCoin />}
            label="Execute"
            disabled={claim.state === ENUM_CLAIM_STATE.Challenged}
            title="Trigger claim operation in the chain"
            mode="positive"
          />
        }
        onClose={closeModal}
        isOpen={opened}
        size="small"
      >
        <Outset gu16>
          <AmountFieldInput id="bounty" label="Claim amount" value={amount} />
          <AddressFieldInput
            id="playerAddress"
            label="will be sent to (Player)"
            value={claim.playerAddress}
          />
          {!compareCaseInsensitive(claim.playerAddress, walletAddress) && (
            <OnlyStackholderWarnStyled mode="warning">
              <WarningIconContainerStyled>
                <IconCaution />
              </WarningIconContainerStyled>
              <Outset>
                Anyone can execute this claim. If you didn&apos;t create the claim, consider
                contacting the Player after executing.
              </Outset>
            </OnlyStackholderWarnStyled>
          )}
        </Outset>
      </ModalBase>
    </>
  );
}
