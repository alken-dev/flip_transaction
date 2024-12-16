import React from 'react';
import { View, TextInput } from 'react-native';

interface SearchBarProps {
  query: string;
  onChange: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        value={query}
        onChangeText={onChange}
        placeholder="Search by Beneficiary Name"
        style={{
          borderColor: '#ccc',
          borderWidth: 1,
          padding: 8,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default SearchBar;