import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useTransactionList } from '../hooks/useTransactionList';
import SearchBar from '../components/SearchBar';
import TransactionList from '../components/TransactionList';
import { styles } from '../styles/TransactionListScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Import the types
import { StackNavigationProp } from '@react-navigation/stack';
import { Transaction } from '../models/types';

type TransactionListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionList'
>;

const TransactionListScreen: React.FC = () => {

    const navigation = useNavigation<TransactionListScreenNavigationProp>();

    const { transactions, loading, error, fetchTransactions } = useTransactionList();
    const [query, setQuery] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('');
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const handleSearch = (text: string) => setQuery(text);
    const handleSort = (option: string) => {
        setSortOption(option);
    };

    const currentSortLabel = (() => {
        if (sortOption === 'name_asc') return 'Nama A-Z';
        if (sortOption === 'name_desc') return 'Nama Z-A';
        if (sortOption === 'date_desc') return 'Tanggal Terbaru';
        if (sortOption === 'date_asc') return 'Tanggal Terlama';
        return 'URUTKAN';
    })();

    const filteredTransactions = transactions.filter((txn) =>
        txn.beneficiary_name.toLowerCase().includes(query.toLowerCase()) ||
        txn.sender_bank.toLowerCase().includes(query.toLowerCase()) ||
        txn.beneficiary_bank.toLowerCase().includes(query.toLowerCase()) ||
        txn.amount.toString().includes(query.toLowerCase())
    ).sort((a, b) => {
        if (sortOption === 'name_asc') return a.beneficiary_name.localeCompare(b.beneficiary_name);
        if (sortOption === 'name_desc') return b.beneficiary_name.localeCompare(a.beneficiary_name);
        if (sortOption === 'date_desc') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        if (sortOption === 'date_asc') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        return 0;
    });

    const handlePressTransaction = (transaction: Transaction) => {
        navigation.navigate('TransactionDetail', { transactionDetail: transaction });
      };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchTransactions().finally(() => setRefreshing(false));  // Assuming `fetchTransactions` is the method that loads transactions
    }, [fetchTransactions]);

    if (loading) return <Text style={styles.message}>Loading...</Text>;
    if (error) return <Text style={styles.message}>{error}</Text>;

    return (
        <View style={styles.container}>
            <SearchBar
                query={query}
                onChange={handleSearch}
                onSort={handleSort}
                currentSort={currentSortLabel}
            />
            <FlatList
                data={filteredTransactions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <TransactionList transactions={[item]} onPress={handlePressTransaction} />
                )}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                contentContainerStyle={{ paddingBottom: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default TransactionListScreen;
