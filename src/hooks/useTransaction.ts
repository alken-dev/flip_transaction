import { useState, useEffect } from 'react';
import { Transaction } from '../models/types';

export const useTransaction = (transactionId: string, transactions: Transaction[]) => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    // console.log('transactionid: '+transactionId);
    // console.log('transaction: '+JSON.stringify(transactions));
    const foundTransaction = transactions.find((txn) => txn.id === transactionId);
    console.log('founded: '+JSON.stringify(foundTransaction));
    setTransaction(foundTransaction || null);
  }, [transactionId, transactions]); 

  return { transaction };
};