import React from 'react';
import { View, Text } from 'react-native';
import { Transaction } from '../models/types';

interface TransactionDetailProps {
  transaction: Transaction | null;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  if (!transaction) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>ID: {transaction.id}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Status: {transaction.status}</Text>
      <Text>Sender Bank: {transaction.sender_bank}</Text>
      <Text>Account Number: {transaction.account_number}</Text>
      <Text>Beneficiary: {transaction.beneficiary_name}</Text>
      <Text>Beneficiary Bank: {transaction.beneficiary_bank}</Text>
      <Text>Created At: {transaction.created_at}</Text>
      <Text>Completed At: {transaction.completed_at}</Text>
      <Text>Remark: {transaction.remark}</Text>
    </View>
  );
};

export default TransactionDetail;