/* eslint-disable no-nested-ternary */
import { Button, IconCoin } from '@1hive/1hive-ui';
import { noop, uniqueId } from 'lodash-es';
import { useEffect, useMemo, useState } from 'react';
import { ENUM_TRANSACTION_STATUS, ENUM } from 'src/constants';
import { useTransactionContext } from 'src/contexts/transaction.context';
import { QuestModel } from 'src/models/quest.model';
import { TokenAmountModel } from 'src/models/token-amount.model';
import styled from 'styled-components';
import { GUpx } from 'src/utils/style.util';
import { useWallet } from 'src/contexts/wallet.context';
import { computeTransactionErrorMessage } from 'src/utils/errors.util';
import { getTokenInfo } from 'src/utils/contract.util';
import { toTokenAmountModel } from 'src/utils/data.utils';
import { TokenModel } from 'src/models/token.model';
import { useIsMountedRef } from 'src/hooks/use-mounted.hook';
import { TransactionModel } from 'src/models/transaction.model';
import * as QuestService from '../../services/quest.service';
import { AmountFieldInputFormik } from '../field-input/amount-field-input';
import { Outset } from '../utils/spacer-util';
import ModalBase, { ModalCallback } from './modal-base';
import IdentityBadge from '../identity-badge';
import { FieldInput } from '../field-input/field-input';

// #region StyledComponents

const OpenButtonStyled = styled(Button)`
  margin: 0 ${GUpx(1)};
  width: fit-content;
`;

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// #endregion

type Props = {
  questData: QuestModel;
  bounty?: TokenAmountModel | null;
  isDepositReleased: boolean;
  onClose?: ModalCallback;
};

export default function ReclaimFundsModal({
  questData,
  bounty,
  onClose = noop,
  isDepositReleased,
}: Props) {
  const [opened, setOpened] = useState(false);
  const { setTransaction } = useTransactionContext();
  const { walletAddress } = useWallet();
  const [depositTokenAmount, setDepositTokenAmount] = useState<TokenAmountModel>();
  const modalId = useMemo(() => uniqueId('reclaim-funds-modal'), []);
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    if (questData.deposit) {
      const depositAmount = questData.deposit;
      getTokenInfo(questData.deposit?.token).then((token) => {
        if (isMountedRef.current) {
          setDepositTokenAmount(
            toTokenAmountModel({
              ...token,
              amount: depositAmount.amount.toString(),
            } as TokenModel),
          );
        }
      });
    }
  }, []);

  const reclaimFundTx = async () => {
    try {
      const txPayload = {
        modalId,
        estimatedDuration: ENUM.ENUM_ESTIMATED_TX_TIME_MS.QuestFundsReclaiming,
        message: 'Reclaiming funds and deposit',
        status: ENUM_TRANSACTION_STATUS.WaitingForSignature,
        type: 'QuestReclaimFunds',
        args: { questAddress: questData.address },
      } as TransactionModel;
      setTransaction(txPayload);
      const txReceipt = await QuestService.reclaimQuestUnusedFunds(
        walletAddress,
        questData,
        (txHash) => {
          setTransaction({
            ...txPayload,
            hash: txHash,
            status: ENUM_TRANSACTION_STATUS.Pending,
          });
        },
      );
      setTransaction({
        ...txPayload,
        status: txReceipt?.status
          ? ENUM_TRANSACTION_STATUS.Confirmed
          : ENUM_TRANSACTION_STATUS.Failed,
      });
      if (!txReceipt?.status) throw new Error('Failed to reclaim funds');
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

  const closeModal = (success: boolean) => {
    setOpened(false);
    onClose(success);
  };

  return (
    <>
      <ModalBase
        id={modalId}
        title="Reclaim funds and deposit"
        openButton={
          <OpenButtonStyled
            onClick={() => setOpened(true)}
            icon={<IconCoin />}
            label="Reclaim"
            mode="strong"
            title="Reclaim"
          />
        }
        buttons={
          <Button
            onClick={reclaimFundTx}
            icon={<IconCoin />}
            label="Reclaim"
            mode="strong"
            title="Reclaim remaining funds and deposit"
          />
        }
        onClose={closeModal}
        isOpen={opened}
      >
        <RowStyled>
          <Outset gu16>
            <AmountFieldInputFormik id="bounty" label="Reclaimable funds" value={bounty} />
          </Outset>
          <Outset gu16>
            <FieldInput label="will be send to">
              <IdentityBadge entity={questData.fallbackAddress} badgeOnly />
            </FieldInput>
          </Outset>
        </RowStyled>
        {depositTokenAmount && !isDepositReleased && (
          <RowStyled>
            <Outset gu16>
              <AmountFieldInputFormik
                id="bounty"
                label="Reclaimable deposit"
                value={depositTokenAmount}
              />
            </Outset>
            <Outset gu16>
              <FieldInput label="will be send to">
                <IdentityBadge entity={questData.creatorAddress} badgeOnly />
              </FieldInput>
            </Outset>
          </RowStyled>
        )}
      </ModalBase>
    </>
  );
}
