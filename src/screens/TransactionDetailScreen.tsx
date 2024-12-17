import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import TransactionDetail from '../components/TransactionDetail';
import { Transaction } from '../models/types';

type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transactionDetail: Transaction };
};

interface TransactionDetailScreenProps {
  route: RouteProp<RootStackParamList, 'TransactionDetail'>;
}

const TransactionDetailScreen: React.FC<TransactionDetailScreenProps> = ({ route }) => {
  const { transactionDetail } = route.params;
  const navigation = useNavigation();

  if (!transactionDetail) return <Text>Transaction not found</Text>;

  return (
    <View>
      <TransactionDetail transaction={transactionDetail} onClose={() => navigation.goBack()} />
    </View>
  );
};

export default TransactionDetailScreen;