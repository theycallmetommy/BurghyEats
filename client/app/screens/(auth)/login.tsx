import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from "react";
import { Platform, Text, TextInput, View, SafeAreaView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, Dimensions, TouchableOpacity } from "react-native";
import Logo from "../../assets/roost.svg";
import axios from 'axios';

//axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export default function Login({ navigation }) {
    const [user, onChangeUsername] = React.useState('');
    const [pass, onChangePassword] = React.useState('');
    const [buttontext, setButtonText] = React.useState("Log in")

    const {width} = Dimensions.get('screen');

    const handleLogin = async () => {
        setButtonText("Loading...")
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/login', {
                username:user,
                password:pass,
            });
            localStorage.setItem('token',response.data.access);
            navigation.navigate("Menu");
        } catch (error) {
            console.error('Login failed:', error.response.data)
            setButtonText("Login Failed!")
        }
    };

    return (
        <TouchableWithoutFeedback 
        onPress={() => {
            if (Platform.OS !== 'web') {
                Keyboard.dismiss();
            }
        }} 
        accessible={false}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    {/* Logo Section */}
                    <View style={styles.logoContainer}>
                        <Logo width={width * 0.2}/>
                    </View>
                    {/* Form Section */}
                    <View style={[styles.formContainer, {width: width * 0.8, maxWidth: 400}]}>
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeUsername}
                        value={user}
                        placeholder="Username"
                        />
                        <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={pass}
                        placeholder="Password"
                        />
                        <TouchableWithoutFeedback>
                            <Text style={{color: "#b0aaaa", textAlign: "left", textDecorationLine: "underline",}} onPress={() => Alert.alert("Reset Password")}>
                                Forgot Your Password?
                            </Text>
                        </TouchableWithoutFeedback>
                        <TouchableOpacity onPress={handleLogin}>
                            <Text style={styles.button}>{buttontext}</Text>
                        </TouchableOpacity>
                        <View style={{marginTop: 20}}>
                            <Text>Don't have an account? <Text style={{color: "#1D3B2A", textDecorationLine: "underline"}} onPress={() => navigation.navigate("Signup")}>Sign Up</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
        backgroundColor: '#CF102D',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
    }
});