import { useState, useEffect } from 'react';
import { getTransactions } from '../services/transactionService'
import { Transaction } from '../models/types';

export const useTransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        setError('Error fetching transactions.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
};