import React, { createContext, useContext, useState } from 'react';
import { TransactionModel } from 'src/models/transaction.model';

type TransactionContextModel = {
  newTransaction: TransactionModel | undefined;
  pushTransaction: (_tx: TransactionModel) => void;
  updatedTransactionStatus: TransactionModel | undefined;
  updateTransactionStatus: (_tx: TransactionModel) => void;
  updateLastTransactionStatus: (_status: string) => void;
};

const TransactionContext = createContext<TransactionContextModel | undefined>(undefined);
export const useTransactionContext = () => useContext(TransactionContext)!;

type Props = {
  children: React.ReactNode;
};
export const TransactionContextProvider = ({ children }: Props) => {
  const [newTransaction, pushTransaction] = useState<TransactionModel>();
  const [updatedTransactionStatus, updateTransactionStatus] = useState<TransactionModel>();
  const updateLastTransactionStatus = (status: string) => {
    if (newTransaction) newTransaction.status = status;
    updateTransactionStatus(newTransaction);
  };
  return (
    <TransactionContext.Provider
      value={{
        newTransaction,
        pushTransaction,
        updatedTransactionStatus,
        updateTransactionStatus,
        updateLastTransactionStatus,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
