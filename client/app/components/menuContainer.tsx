import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from '../screens/(tabs)/home';
import Feed from '../screens/(tabs)/feed';
import Account from '../screens/(tabs)/account';
import CustomTabBar from '../components/customTabBar';

const Tab = createBottomTabNavigator();

export default function MenuContainer() {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} initialRouteName='Account'>
            <Tab.Screen name="Feed" component={Feed} options={{ title: "Feed", headerShown: false }} />
            <Tab.Screen name="Home" component={Home} options={{ title: "Home", headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ title: "Account", headerShown: false}} />
        </Tab.Navigator>
    )
}