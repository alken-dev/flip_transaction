import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../styles/SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchBarProps {
    query: string;
    onChange: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Cari nama, bank, atau nominal"
                value={query}
                onChangeText={onChange}
            />
            <Icon name="search" size={30} color="#888" style={styles.icon} />
        </View>
    );
};

export default SearchBar;
