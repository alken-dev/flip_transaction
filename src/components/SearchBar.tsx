import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/SearchBar.styles';

type SearchBarProps = {
  query: string;
  onChange: (text: string) => void;
  onSort: (option: string) => void;
  currentSort: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChange,
  onSort,
  currentSort,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const sortOptions = [
    { label: 'URUTKAN', value: '' },
    { label: 'Nama A-Z', value: 'name_asc' },
    { label: 'Nama Z-A', value: 'name_desc' },
    { label: 'Tanggal Terbaru', value: 'date_desc' },
    { label: 'Tanggal Terlama', value: 'date_asc' },
  ];

  const handleSelectSort = (option: string) => {
    onSort(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Cari nama, bank, atau nominal"
        value={query}
        onChangeText={onChange}
      />

      <Icon name="search" size={20} color="#888" style={styles.icon} />

      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.sortButtonText}>{currentSort}</Text>
        <Icon name="chevron-down" size={15} color="#FF5722" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <FlatList
              data={sortOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleSelectSort(item.value)}>
                  <View style={[styles.circle, currentSort == item.label ? styles.circleSelected : styles.circleUnselected]}>
                    {currentSort == item.label && <View style={styles.circleInner} />}
                </View>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default SearchBar;
