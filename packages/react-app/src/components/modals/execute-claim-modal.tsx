import { Button, useToast, IconCoin, Field, Timer } from '@1hive/1hive-ui';
import { noop } from 'lodash-es';
import { ReactNode, useEffect, useState } from 'react';
import { ENUM_CLAIM_STATE, ENUM, ENUM_TRANSACTION_STATUS } from 'src/constants';
import { useTransactionContext } from 'src/contexts/transaction.context';
import styled from 'styled-components';
import { GUpx } from 'src/utils/css.util';
import { ClaimModel } from 'src/models/claim.model';
import { TokenAmountModel } from 'src/models/token-amount.model';
import { getLastBlockDate } from 'src/utils/date.utils';
import { useWallet } from 'src/contexts/wallet.context';
import { computeTransactionErrorMessage } from 'src/utils/errors.util';
import * as QuestService from '../../services/quest.service';
import { AmountFieldInputFormik } from '../field-input/amount-field-input';
import { Outset } from '../utils/spacer-util';
import ModalBase, { ModalCallback } from './modal-base';
import { AddressFieldInput } from '../field-input/address-field-input';

// #region StyledComponents

const OpenButtonStyled = styled(Button)`
  margin: 0 ${GUpx()};
  margin-bottom: ${GUpx()};
  width: fit-content;
`;

const OpenButtonWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

// #endregion

type Props = {
  claim: ClaimModel;
  questTotalBounty?: TokenAmountModel;
  onClose?: ModalCallback;
};

export default function ExecuteClaimModal({ claim, questTotalBounty, onClose = noop }: Props) {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<TokenAmountModel>();
  const [scheduleTimeout, setScheduleTimeout] = useState<boolean>();
  const [buttonLabel, setButtonLabel] = useState<ReactNode>('Claim');
  const { pushTransaction, updateTransactionStatus, updateLastTransactionStatus } =
    useTransactionContext();
  const toast = useToast();
  const { walletAddress } = useWallet();
  useEffect(() => {
    const launchTimeoutAsync = async (execTimeMs: number) => {
      const now = await getLastBlockDate();
      if (now >= execTimeMs) setScheduleTimeout(true);
      else {
        setScheduleTimeout(false);
        setTimeout(() => {
          setScheduleTimeout(true);
        }, execTimeMs - now); // To ms
      }
      setLoading(false);
    };
    if (claim.executionTimeMs) launchTimeoutAsync(claim.executionTimeMs);
  }, []);

  useEffect(() => {
    if (scheduleTimeout === undefined) return;
    if (claim.state === ENUM_CLAIM_STATE.Challenged) setButtonLabel('Challenged by someone');
    else setButtonLabel('Claim');
  }, [claim.state, claim.executionTimeMs, scheduleTimeout]);

  useEffect(() => {
    if (questTotalBounty) {
      if (claim.claimedAmount.parsedAmount) setAmount(claim.claimedAmount);
      else setAmount(questTotalBounty); // Claim all funds
    }
  }, [claim.claimedAmount, questTotalBounty]);

  const closeModal = (success: boolean) => {
    setOpened(false);
    onClose(success);
  };

  const claimTx = async () => {
    try {
      setLoading(true);
      const pendingMessage = 'Sending claimed amount to your wallet...';
      toast(pendingMessage);
      const txReceipt = await QuestService.executeQuestClaim(walletAddress, claim, (tx) =>
        pushTransaction({
          hash: tx,
          estimatedEnd: Date.now() + ENUM.ENUM_ESTIMATED_TX_TIME_MS.ClaimExecuting,
          pendingMessage,
          status: ENUM_TRANSACTION_STATUS.Pending,
        }),
      );
      if (txReceipt) {
        updateTransactionStatus({
          hash: txReceipt.transactionHash,
          status: txReceipt.status
            ? ENUM_TRANSACTION_STATUS.Confirmed
            : ENUM_TRANSACTION_STATUS.Failed,
        });
      } else {
        updateLastTransactionStatus(ENUM_TRANSACTION_STATUS.Failed);
      }
      closeModal(true);
      if (!txReceipt?.status) throw new Error('Failed to execute claim');
      toast('Operation succeed');
    } catch (e: any) {
      updateLastTransactionStatus(ENUM_TRANSACTION_STATUS.Failed);
      toast(computeTransactionErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ModalBase
        title="Claim quest bounty"
        openButton={
          <OpenButtonWrapperStyled>
            {!loading && !scheduleTimeout && claim.executionTimeMs ? (
              <Field label="Claimable in">
                <Timer end={new Date(claim.executionTimeMs)} />
              </Field>
            ) : (
              <OpenButtonStyled
                onClick={() => setOpened(true)}
                icon={<IconCoin />}
                label={buttonLabel}
                mode="positive"
                disabled={
                  loading ||
                  !scheduleTimeout ||
                  claim.state === ENUM_CLAIM_STATE.Challenged ||
                  !walletAddress
                }
              />
            )}
          </OpenButtonWrapperStyled>
        }
        buttons={
          <Button
            onClick={() => claimTx()}
            icon={<IconCoin />}
            label={buttonLabel}
            disabled={
              loading ||
              !scheduleTimeout ||
              claim.state === ENUM_CLAIM_STATE.Challenged ||
              !walletAddress
            }
            mode="positive"
          />
        }
        onClose={() => closeModal(false)}
        isOpen={opened}
      >
        <Outset gu16>
          <AmountFieldInputFormik
            id="bounty"
            label="Claim amount"
            isLoading={loading}
            value={amount}
          />
          <AddressFieldInput
            id="playerAddress"
            label="will be send to"
            isLoading={loading}
            value={claim.playerAddress}
          />
        </Outset>
      </ModalBase>
    </>
  );
}
