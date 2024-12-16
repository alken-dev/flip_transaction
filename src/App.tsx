import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './screens/TransactionListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import { RootStackParamList } from './navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen name="TransactionList" component={TransactionListScreen} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;