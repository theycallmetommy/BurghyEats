import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, TextInput, View, SafeAreaView, StyleSheet, Image, Button, Alert } from "react-native";
import Logo from "../assets/logo.svg";

export default function Login() {
    const [user, onChangeUsername] = React.useState('')
    const [pass, onChangePassword] = React.useState('')

    return (
        <View style={styles.container}>
            <Logo width={100} height={100} />
            <Text>Login</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              value={user}
              placeholder="Username"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={pass}
              placeholder="Password"
            />
            <Button
              title="Submit"
              onPress={() => Alert.alert(user,pass)}
            />
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
  input : {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});