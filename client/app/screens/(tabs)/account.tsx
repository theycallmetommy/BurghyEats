import React from "react";
import { Text, View , Image, ScrollView} from "react-native";
import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather'

export default function Home() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <Image source={{ uri: "https://avatar.iran.liara.run/public"}} width={150} height={150}/>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}