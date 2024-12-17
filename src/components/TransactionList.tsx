import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Transaction } from '../models/types';
import { styles } from '../styles/TransactionList.styles';
import { formatDateToDdMmYyyy } from '../utils/dateUtils';
import { formatToRpFromNumber } from '../utils/currencyUtils'

interface TransactionListProps {
    transactions: Transaction[];
    onPress: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onPress }) => {
    const renderTransaction = ({ item }: { item: Transaction }) => {
        const isPending = item.status === 'PENDING';
        return (
            <TouchableOpacity
                onPress={() => onPress(item)}
                style={styles.container}
            >
                <View style={[styles.statusIndicator, isPending && styles.pending]} />
                <View style={styles.content}>
                    <View style={styles.headerRow}>
                        <Text style={styles.bankText}>
                            {`${item.sender_bank} ➔ ${item.beneficiary_bank}`}
                        </Text>
                        <View
                            style={[
                                styles.statusBadge,
                                {
                                    backgroundColor: isPending ? '#fff' : '#1EC15F',
                                    borderColor: isPending ? '#FF5722' : 'transparent',
                                    borderWidth: isPending ? 1 : 0,
                                },
                            ]}
                        >
                            <Text style={isPending ? styles.statusBadgeTextPending : styles.statusBadgeText}>
                                {isPending ? 'Pengecekan' : 'Berhasil'}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.beneficiaryName}>{item.beneficiary_name}</Text>
                    <Text style={styles.detailText}>
                        {`${formatToRpFromNumber(item.amount)} • ${formatDateToDdMmYyyy(item.created_at)}`}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default TransactionList;
