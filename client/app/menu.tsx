import React from "react";
import { ScrollView, Text, View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';


export default function Menu() {
    const { location } = useLocalSearchParams();
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>{location}</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}