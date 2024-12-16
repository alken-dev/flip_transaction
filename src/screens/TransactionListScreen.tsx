import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useTransactionList } from '../hooks/useTransactionList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import TransactionList from '../components/TransactionList';
import { styles } from '../styles/TransactionListScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Import the types
import { StackNavigationProp } from '@react-navigation/stack';

type TransactionListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionList'
>;

const TransactionListScreen: React.FC = () => {

    const navigation = useNavigation<TransactionListScreenNavigationProp>();

    const { transactions, loading, error } = useTransactionList();
    const [query, setQuery] = useState<string>('');

    const handleSearch = (text: string) => setQuery(text);

    const filteredTransactions = transactions.filter((txn) =>
        txn.beneficiary_name.toLowerCase().includes(query.toLowerCase()) ||
        txn.sender_bank.toLowerCase().includes(query.toLowerCase()) ||
        txn.beneficiary_bank.toLowerCase().includes(query.toLowerCase()) ||
        txn.amount.toString().includes(query.toLowerCase())
    );

    const handlePressTransaction = (id: string) => {
        navigation.navigate('TransactionDetail', { transactionId: id });
      };

    if (loading) return <Text style={styles.message}>Loading...</Text>;
    if (error) return <Text style={styles.message}>{error}</Text>;

    return (
        <View style={styles.container}>
            <SearchBar query={query} onChange={handleSearch} />
            <TransactionList 
                transactions={filteredTransactions} 
                onPress={handlePressTransaction} 
            />
        </View>
    );
};

export default TransactionListScreen;
