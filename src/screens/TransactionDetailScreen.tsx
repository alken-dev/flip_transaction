import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTransaction } from '../hooks/useTransaction';
import { RouteProp, useNavigation } from '@react-navigation/native';
import TransactionDetail from '../components/TransactionDetail';
import { useTransactionList } from '../hooks/useTransactionList';

type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transactionId: string };
};

interface TransactionDetailScreenProps {
  route: RouteProp<RootStackParamList, 'TransactionDetail'>;
}

const TransactionDetailScreen: React.FC<TransactionDetailScreenProps> = ({ route }) => {
  const { transactionId } = route.params;
  const { transactions } = useTransactionList(); // Fetch all transactions from the state
  const { transaction } = useTransaction(transactionId, transactions); // Filter by the selected transaction ID
  const navigation = useNavigation();

  if (!transaction) return <Text>Transaction not found</Text>;

  return (
    <View>
      <TransactionDetail transaction={transaction} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back to List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionDetailScreen;