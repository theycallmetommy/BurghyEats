import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import COLORS from './constants/colors';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }} />
    );
}