import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Platform, Text, TextInput, View, SafeAreaView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, Dimensions } from "react-native";
import Logo from "../../assets/logo.svg";

export default function Login({ navigation }) {
    const [user, onChangeUsername] = React.useState('');
    const [pass, onChangePassword] = React.useState('');

    const {width} = Dimensions.get('screen');

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
                        <Logo width={width * 0.5}/>
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
                        <TouchableWithoutFeedback>
                            <Text style={styles.button} onPress={() => Alert.alert("Log In")}>Log In</Text>
                        </TouchableWithoutFeedback>
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
        backgroundColor: '#1D3B2A',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
    }
});