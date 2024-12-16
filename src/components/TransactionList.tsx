import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Transaction } from '../models/types';

interface TransactionListProps {
  transactions: Transaction[];
  onPress: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onPress }) => {
  return (
    <View>
      {transactions.map((transaction) => (
        <TouchableOpacity key={transaction.id} onPress={() => onPress(transaction.id)}>
          <View>
            <Text>{transaction.beneficiary_name}</Text>
            <Text>{transaction.amount}</Text>
            <Text>{transaction.created_at}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TransactionList