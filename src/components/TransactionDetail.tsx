import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Transaction } from '../models/types';
import { styles } from '../styles/TransactionDetail.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';
import { formatDateToDdMmYyyy } from '../utils/dateUtils';
import { formatToRpFromNumber } from '../utils/currencyUtils'


interface TransactionDetailProps {
  transaction: Transaction | null;
  onClose: () => void;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction, onClose }) => {

  const handleCopy = (text: string) => {
    Clipboard.setString(text);
    console.log('value id transaction copy:', text);
  };

  if (!transaction) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>ID TRANSAKSI: #{transaction.id}</Text>
        <TouchableOpacity onPress={() => handleCopy(transaction.id)}>
          <Icon name="files-o" size={20} style={styles.copyIcon}/>
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Tutup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.bankSection}>
          <Text style={styles.bankTransfer}>
            {transaction.sender_bank} ➔ {transaction.beneficiary_bank}
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>- {transaction.beneficiary_name}</Text>
            <Text style={styles.value}>{transaction.account_number}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.labelRight}>NOMINAL</Text>
            <Text style={styles.valueRight}>{formatToRpFromNumber(transaction.amount)}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>BERITA TRANSFER</Text>
            <Text style={styles.value}>{transaction.remark}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.labelRight}>KODE UNIK</Text>
            <Text style={styles.valueRight}>{transaction.unique_code}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>WAKTU DIBUAT</Text>
            <Text style={styles.value}>{formatDateToDdMmYyyy(transaction.created_at)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;
