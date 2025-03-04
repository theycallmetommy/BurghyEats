import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: 'https://logoipsum.com/artwork/335'}}/>
            <Text>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});