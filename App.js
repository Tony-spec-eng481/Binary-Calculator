import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './src/screens/CalculatorScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import { HistoryProvider } from './src/utils/HistoryContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <HistoryProvider>
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={
            {
              headerShown: false,
            }
           }>
          <Stack.Screen name="Calculator" component={CalculatorScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </HistoryProvider>
  );
}   