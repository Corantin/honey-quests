/* eslint-disable no-nested-ternary */
import { Button } from '@1hive/1hive-ui';
import { Form, Formik } from 'formik';
import { noop, uniqueId } from 'lodash-es';
import { useMemo, useRef, useState } from 'react';
import { GiTwoCoins } from 'react-icons/gi';
import styled from 'styled-components';
import { useTransactionContext } from 'src/contexts/transaction.context';
import { GUpx } from 'src/utils/style.util';
import { QuestModel } from 'src/models/quest.model';
import { useWallet } from 'src/contexts/wallet.context';
import { FundModel } from 'src/models/fund.model';
import { FormErrors } from 'src/models/form-errors';
import { fundQuestTransaction } from 'src/services/transaction-handler';
import { AmountFieldInputFormik } from '../field-input/amount-field-input';
import { Outset } from '../utils/spacer-util';
import ModalBase, { ModalCallback } from './modal-base';
import { AddressFieldInput } from '../field-input/address-field-input';
import { WalletBallance } from '../wallet-balance';

const FormStyled = styled(Form)`
  width: 100%;
`;

const OpenButtonStyled = styled(Button)`
  margin: 0 ${GUpx(1)};
  width: fit-content;
`;

type Props = {
  onClose?: ModalCallback;
  quest: QuestModel;
};

export default function FundModal({ quest, onClose = noop }: Props) {
  const { walletAddress } = useWallet();
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { setTransaction, transaction } = useTransactionContext();
  const [isEnoughBalance, setIsEnoughBalance] = useState(false);
  const modalId = useMemo(() => uniqueId('fund-modal'), []);

  const closeModal = (success: boolean) => {
    setOpened(false);
    onClose(success);
  };

  const onSubmit = async (values: FundModel) => {
    validate(values); // validate one last time before submiting
    if (isFormValid && quest.address) {
      setLoading(true);
      await fundQuestTransaction(
        modalId,
        values.fundAmount,
        quest.address,
        'Sending funds to the Quest',
        walletAddress,
        setTransaction,
      );
      setLoading(false);
    }
  };

  const validate = (values: FundModel) => {
    const errors = {} as FormErrors<FundModel>;
    if (!values.fundAmount?.parsedAmount || values.fundAmount.parsedAmount <= 0)
      errors.fundAmount = 'Amount invalid';

    setIsFormValid(Object.keys(errors).length === 0);
    return errors;
  };

  return (
    <Formik
      initialValues={
        {
          fundAmount: { parsedAmount: 0, token: quest.rewardToken },
        } as FundModel
      }
      onSubmit={onSubmit}
      validateOnChange
      validate={validate}
    >
      {({ values, handleSubmit, handleChange, touched, errors }) => (
        <ModalBase
          id={modalId}
          title="Fund quest"
          openButton={
            <OpenButtonStyled
              icon={<GiTwoCoins />}
              onClick={() => setOpened(true)}
              label="Fund"
              mode="strong"
              title="Fund"
            />
          }
          buttons={[
            quest.rewardToken && (
              <WalletBallance
                key="fundAmount"
                askedTokenAmount={values.fundAmount}
                setIsEnoughBalance={setIsEnoughBalance}
                isLoading={loading}
              />
            ),
            <Button
              key="buttonFund"
              icon={<GiTwoCoins />}
              type="submit"
              form="form-fund"
              label="Fund"
              mode="strong"
              title={
                loading || !walletAddress
                  ? 'Not ready ...'
                  : !isFormValid
                  ? 'Form not valid'
                  : transaction
                  ? 'Wait for previous transaction to complete'
                  : 'Fund'
              }
              disabled={
                loading || !walletAddress || !isEnoughBalance || !isFormValid || transaction
              }
            />,
          ]}
          onClose={closeModal}
          isOpen={opened}
          size="small"
        >
          <FormStyled id="form-fund" onSubmit={handleSubmit} ref={formRef}>
            <Outset gu16>
              <AddressFieldInput
                id="address"
                label="Quest address"
                value={quest.address}
                isLoading={loading}
              />
              <AmountFieldInputFormik
                id="fundAmount"
                isEdit
                label="Amount"
                tooltip="The amount of the given token"
                onChange={handleChange}
                isLoading={loading}
                value={values.fundAmount}
                error={touched.fundAmount && (errors.fundAmount as string)}
              />
            </Outset>
          </FormStyled>
        </ModalBase>
      )}
    </Formik>
  );
}
