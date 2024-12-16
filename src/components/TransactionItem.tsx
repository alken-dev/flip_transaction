import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Transaction } from '../models/types';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(transaction.id)} style={{ padding: 10 }}>
      <View>
        <Text>{transaction.beneficiary_name}</Text>
        <Text>{transaction.created_at}</Text>
        <Text>${transaction.amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;