import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/(auth)/login';
import Signup from './app/screens/(auth)/signup';
import MenuContainer from './app/components/menuContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      {/* <Stack.Navigator initialRouteName='Login'> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MenuContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}