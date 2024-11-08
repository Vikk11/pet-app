import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Login'}} />
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
                {/* <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'Signup'}} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

