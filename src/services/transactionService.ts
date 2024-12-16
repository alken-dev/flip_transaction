import axios from 'axios';
import { Transaction } from '../models/types';

const BASE_URL = 'https://recruitment-test.flip.id/frontend-test';

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const response = await axios.get(BASE_URL);
    const transactions = Object.values(response.data) as Transaction[];
    return transactions;
  } catch (error) {
    console.error('Error get transactions:', error);
    throw error; 
  }
};
