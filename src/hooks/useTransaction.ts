import { useState, useEffect } from 'react';
import { Transaction } from '../models/types';

export const useTransaction = (transactionId: string, transactions: Transaction[]) => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    // Filter the transactions to find the transaction with the given ID
    const foundTransaction = transactions.find((txn) => txn.id === transactionId);
    setTransaction(foundTransaction || null);
  }, [transactionId, transactions]); // Re-run when transactionId or transactions change

  return { transaction };
};