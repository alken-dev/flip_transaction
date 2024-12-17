import { useState, useEffect, useCallback } from 'react';
import { getTransactions } from '../services/transactionService'
import { Transaction } from '../models/types';

export const useTransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error before trying again
    try {
      const data = await getTransactions();
      setTransactions(data);
    } catch (err) {
      setError('Error fetching transactions.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTransactions();
        setTransactions(data);
        // console.log('transactionList: '+JSON.stringify(data));
      } catch (err) {
        setError('Error fetching transactions.');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading, error, fetchTransactions };
};