import React from 'react';
import { View, Button } from 'react-native';

interface FilterProps {
  onSortByName: () => void;
  onSortByDate: () => void;
}

const Filter: React.FC<FilterProps> = ({ onSortByName, onSortByDate }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Button title="Sort A-Z" onPress={onSortByName} />
      <Button title="Sort by Date" onPress={onSortByDate} />
    </View>
  );
};

export default Filter;