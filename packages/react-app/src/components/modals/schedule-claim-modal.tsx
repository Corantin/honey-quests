import { Button, useToast } from '@1hive/1hive-ui';
import { noop, uniqueId } from 'lodash-es';
import { useState, useRef } from 'react';
import { GiBroadsword } from 'react-icons/gi';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { ENUM_TRANSACTION_STATUS, ENUM } from 'src/constants';
import { TokenAmountModel } from 'src/models/token-amount.model';
import { ClaimModel } from 'src/models/claim.model';
import { useTransactionContext } from 'src/contexts/transaction.context';
import { GUpx } from 'src/utils/css.util';
import { getNetwork } from 'src/networks';
import { useWallet } from 'src/contexts/wallet.context';
import { toChecksumAddress } from 'web3-utils';
import { computeTransactionErrorMessage } from 'src/utils/errors.util';
import ModalBase, { ModalCallback } from './modal-base';
import * as QuestService from '../../services/quest.service';
import { AmountFieldInputFormik } from '../field-input/amount-field-input';
import TextFieldInput from '../field-input/text-field-input';
import { ChildSpacer, Outset } from '../utils/spacer-util';
import CheckboxFieldInput from '../field-input/checkbox-field-input';
import { AddressFieldInput } from '../field-input/address-field-input';
import { WalletBallance } from '../wallet-balance';

// #region StyledComponents

const FormStyled = styled(Form)`
  width: 100%;
`;

const OpenButtonStyled = styled(Button)`
  margin: 0 ${GUpx()};
  width: fit-content;
`;

const LineStyled = styled.div`
  display: flex;
  align-content: center;
`;

// #endregion

type Props = {
  questAddress: string;
  questTotalBounty: TokenAmountModel;
  claimDeposit: TokenAmountModel;
  onClose?: ModalCallback;
};

export default function ScheduleClaimModal({
  questAddress,
  questTotalBounty,
  claimDeposit,
  onClose = noop,
}: Props) {
  const toast = useToast();
  const { walletAddress } = useWallet();
  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [isEnoughBalance, setIsEnoughBalance] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { setTransaction } = useTransactionContext();

  const closeModal = (succeed: any) => {
    setOpened(false);
    onClose(succeed);
  };

  const scheduleClaimTx = async (values: Partial<ClaimModel>, setSubmitting: Function) => {
    try {
      setLoading(true);
      const { governQueueAddress } = getNetwork();
      const scheduleDeposit = (await QuestService.fetchDeposits()).claim;
      let message = 'Approving claim deposit';
      toast(message);
      setTransaction({
        id: uniqueId(),
        estimatedDuration: ENUM.ENUM_ESTIMATED_TX_TIME_MS.TokenAproval,
        message,
        status: ENUM_TRANSACTION_STATUS.WaitingForSignature,
      });
      const approveTxReceipt = await QuestService.approveTokenAmount(
        walletAddress,
        governQueueAddress,
        scheduleDeposit.token,
        (txHash) => {
          setTransaction(
            (oldTx) =>
              oldTx && {
                ...oldTx,
                hash: txHash,
                status: ENUM_TRANSACTION_STATUS.Pending,
              },
          );
        },
      );
      setTransaction(
        (oldTx) =>
          oldTx && {
            ...oldTx,
            status: approveTxReceipt?.status
              ? ENUM_TRANSACTION_STATUS.Confirmed
              : ENUM_TRANSACTION_STATUS.Failed,
          },
      );
      if (!approveTxReceipt?.status) throw new Error('Failed to approve deposit');
      message = 'Scheduling claim';
      setTransaction({
        id: uniqueId(),
        estimatedDuration: ENUM.ENUM_ESTIMATED_TX_TIME_MS.ClaimScheduling,
        message,
        status: ENUM_TRANSACTION_STATUS.WaitingForSignature,
      });
      const scheduleReceipt = await QuestService.scheduleQuestClaim(
        walletAddress,
        {
          claimedAmount: values.claimedAmount!,
          evidence: values.evidence!,
          playerAddress: values.playerAddress ?? walletAddress,
          questAddress,
        },
        (txHash) => {
          setTransaction(
            (oldTx) =>
              oldTx && {
                ...oldTx,
                hash: txHash,
                status: ENUM_TRANSACTION_STATUS.Pending,
              },
          );
        },
      );
      setTransaction(
        (oldTx) =>
          oldTx && {
            ...oldTx,
            status: scheduleReceipt?.status
              ? ENUM_TRANSACTION_STATUS.Confirmed
              : ENUM_TRANSACTION_STATUS.Failed,
          },
      );
      if (!scheduleReceipt?.status)
        throw new Error('Failed to schedule the claim, please retry in a few seconds');
    } catch (e: any) {
      setTransaction(
        (oldTx) =>
          oldTx && {
            ...oldTx,
            status: ENUM_TRANSACTION_STATUS.Failed,
            message: computeTransactionErrorMessage(e),
          },
      );
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <ModalBase
      id="schedule-claim-modal"
      title="Claim quest"
      openButton={
        <OpenButtonStyled
          icon={<GiBroadsword />}
          onClick={() => setOpened(true)}
          label="Schedule claim"
          mode="positive"
        />
      }
      buttons={[
        <WalletBallance askedTokenAmount={claimDeposit} setIsEnoughBalance={setIsEnoughBalance} />,
        <AmountFieldInputFormik
          key="claimDeposit"
          id="claimDeposit"
          label="Claim Deposit"
          tooltip="Claim deposit"
          tooltipDetail="This amount will be staked when claiming a bounty. If the claim is successfully challenged, you will lose this deposit."
          isLoading={loading}
          value={claimDeposit}
          compact
        />,
        <Button
          key="confirmButton"
          icon={<GiBroadsword />}
          label="Schedule claim"
          mode="positive"
          type="submit"
          form="form-claim"
          disabled={loading || !walletAddress || !isEnoughBalance}
        />,
      ]}
      onClose={() => closeModal(false)}
      isOpen={opened}
    >
      <Formik
        initialValues={{
          evidence: '',
          claimedAmount: { parsedAmount: 0, token: questTotalBounty.token } as TokenAmountModel,
          claimAll: false,
          playerAddress: undefined as string | undefined,
        }}
        onSubmit={(values, { setSubmitting }) => {
          const errors = [];
          if (!values.evidence) errors.push('Validation : Evidence of completion is required');
          if (!values.claimedAmount) errors.push('Validation : Claim amount is required');
          if (values.claimAll) {
            values.claimedAmount.parsedAmount = 0;
            values.claimedAmount.token.amount = '0';
          } else if (values.claimedAmount.parsedAmount > questTotalBounty.parsedAmount)
            errors.push('Validation : Claim amount should not be higher than available bounty');
          if (values.playerAddress) {
            try {
              values.playerAddress = toChecksumAddress(values.playerAddress);
            } catch (error) {
              errors.push('Validation : Player address is not valid');
            }
          }
          if (errors.length) {
            errors.forEach(toast);
          } else {
            scheduleClaimTx(values, setSubmitting);
          }
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <FormStyled id="form-claim" onSubmit={handleSubmit} ref={formRef}>
            <Outset gu16>
              <ChildSpacer size={16} justify="start" vertical>
                <TextFieldInput
                  id="evidence"
                  isEdit
                  label="Evidence of completion"
                  tooltip="Evidence of completion"
                  tooltipDetail="The necessary evidence that will confirm the completion of the quest. Make sure there is enough evidence as it will be useful if this claim is challenged in the future."
                  isLoading={loading}
                  value={values.evidence}
                  onChange={handleChange}
                  multiline
                  wide
                  rows={5}
                  compact
                />
                <LineStyled>
                  <Outset horizontal>
                    <AmountFieldInputFormik
                      id="questBounty"
                      label="Available bounty"
                      isLoading={loading}
                      value={questTotalBounty}
                    />
                  </Outset>
                  <Outset horizontal>
                    <CheckboxFieldInput
                      id="claimAll"
                      label="Claim all"
                      onChange={handleChange}
                      value={values.claimAll}
                      isLoading={loading}
                      isEdit
                    />
                  </Outset>
                  <Outset horizontal>
                    <AmountFieldInputFormik
                      id="claimedAmount"
                      isEdit
                      label="Claim amount"
                      tooltip="Claim amount"
                      tooltipDetail="The expected amount to claim considering the quest agreement. Set it to 0 if you want to claim the whole bounty."
                      isLoading={loading}
                      value={values.claimAll ? questTotalBounty : values.claimedAmount}
                      disabled={values.claimAll}
                    />
                  </Outset>
                </LineStyled>
                <AddressFieldInput
                  id="playerAddress"
                  label="Player address"
                  value={values.playerAddress ?? walletAddress}
                  isLoading={loading}
                  tooltip="Player address"
                  tooltipDetail="Most of time it may be be the connected wallet but can also be set to another wallet address"
                  isEdit
                  onChange={handleChange}
                  wide
                />
              </ChildSpacer>
            </Outset>
          </FormStyled>
        )}
      </Formik>
    </ModalBase>
  );
}
