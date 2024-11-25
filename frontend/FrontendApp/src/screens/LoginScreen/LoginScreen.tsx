import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import styles from './loginScreenStyle';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'user' && password === 'password'){
            // navigation.navigate('Home');
        } else {
            Alert.alert('Invalid credentials', 'Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome_text}>Welcome !</Text>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.small_text}>Sign in to continue.</Text>

            <Text style={styles.label}>USERNAME</Text>
            <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />

            <Text style={styles.label}>PASSWORD</Text>
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Text style={styles.bottom_text}>Forgot password?</Text>
            <Text style={styles.small_text}>Signup !</Text>
        </View>
    );
};

export default LoginScreen;
