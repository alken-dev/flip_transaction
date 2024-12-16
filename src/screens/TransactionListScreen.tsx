// TransactionListScreen.tsx

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTransactionList } from '../hooks/useTransactionList';
import Filter from '../components/Filter';
import TransactionList from '../components/TransactionList';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Import the types
import { StackNavigationProp } from '@react-navigation/stack';

type TransactionListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionList'
>;

const TransactionListScreen: React.FC = () => {
  const { transactions, loading, error } = useTransactionList();
  const [query, setQuery] = useState<string>('');
  const navigation = useNavigation<TransactionListScreenNavigationProp>(); // Use the correct type

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handlePressTransaction = (id: string) => {
    navigation.navigate('TransactionDetail', { transactionId: id });
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{error}</Text>;

  const filteredTransactions = transactions.filter((txn) =>
    txn.beneficiary_name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View>
      <SearchBar query={query} onChange={handleSearch} />
      <Filter onSortByName={() => {}} onSortByDate={() => {}} />
      <TransactionList transactions={filteredTransactions} onPress={handlePressTransaction} />
    </View>
  );
};

export default TransactionListScreen;
