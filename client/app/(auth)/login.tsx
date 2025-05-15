import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Platform, ScrollView, Text, KeyboardAvoidingView, TextInput, View, SafeAreaView, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert, Dimensions } from "react-native";
import Logo from "../../assets/logo.svg";
import { useRouter } from 'expo-router';


export default function Login({ navigation }) {
    const [user, onChangeUsername] = React.useState('');
    const [pass, onChangePassword] = React.useState('');
    const router = useRouter(); // if you're using expo-router


    const {width} = Dimensions.get('screen');

    const handleLogin = () => {
  // fake auth check
  if (user.trim() !== '' && pass.trim() !== '') {
    router.replace('/home'); // or router.push('/home') if you want back nav
  } else {
    alert('Enter something');
  }
};

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
                    keyboardShouldPersistTaps="handled"
                >

                <View style={styles.container}>
                    {/* Logo Section */}
                    <View style={styles.logoContainer}>
                        <Logo width={width * 0.5} height={width * 0.4}/>
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
                            <Text style={styles.button} onPress={handleLogin}>Log In</Text>
                        </TouchableWithoutFeedback>
                        <View style={{marginTop: 20}}>
                            <Text>Don't have an account? <Text style={{color: "#1D3B2A", textDecorationLine: "underline"}} onPress={() => router.replace('/signup')}>Sign Up</Text>
                            </Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start', // stack from the top
    },
    logoContainer : {
        backgroundColor: '#00000',
    },
    formContainer : {
        backgroundColor: '#00000',
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
        backgroundColor: '#9B2743',
        color: '#fff',
        padding: 12,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 20,
    }
});