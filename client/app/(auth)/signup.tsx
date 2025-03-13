import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Platform, Text, TextInput, View, SafeAreaView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, Dimensions } from "react-native";
import Logo from "../assets/logo.svg";
import axios from 'axios';

export default function Signup({ navigation }) {
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [user, onChangeUsername] = React.useState('');
    const [pass, onChangePassword] = React.useState('');
    const [confirmPass, onChangeConfirmPassword] = React.useState('');

    const {width} = Dimensions.get('screen');

    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback 
            onPress={() => {
                if (Platform.OS !== 'web') {
                    Keyboard.dismiss();
                }
            }} 
            accessible={false}>
                <View style={styles.container}>
                    {/* Logo Section */}
                    <View style={styles.logoContainer}>
                        <Logo width={width * 0.5}/>
                    </View>
                    {/* Form Section */}
                    <View style={[styles.formContainer, {width: width * 0.8, maxWidth: 400}]}>
                        <View style={{flexDirection: 'row', width:'100%', gap: 15}}>
                            <TextInput
                            style={[styles.input, {flex: 1}]}
                            onChangeText={onChangeFirstName}
                            value={firstName}
                            placeholder="First Name"
                            />
                            <TextInput
                            style={[styles.input, {flex: 1}]}
                            onChangeText={onChangeLastName}
                            value={lastName}
                            placeholder="Last Name"
                            />
                        </View>
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        value={user}
                        placeholder="Email"
                        />
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={pass}
                        placeholder="Password" secureTextEntry={true}
                        />
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeConfirmPassword}
                        value={confirmPass}
                        placeholder="Re-enter Password" secureTextEntry={true}
                        />
                        <TouchableWithoutFeedback>
                            <Text style={styles.button} onPress={() => {Alert.alert("Sign Up")}}>Sign Up</Text>
                        </TouchableWithoutFeedback>
                        <View style={{marginTop: 20}}>
                            <Text>Already have an account? <Text style={{color: "#1D3B2A", textDecorationLine: "underline"}} onPress={() => navigation.goBack()}>Log In</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    logoContainer : {
        backgroundColor: '#00000',
        paddingBottom: 75,
        top: "20%",
        position: 'absolute',
    },
    formContainer : {
        backgroundColor: '#00000',
        paddingTop: 75,
    },
    input : {
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#c2',
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1D3B2A',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        textAlign: 'center',
    }
});