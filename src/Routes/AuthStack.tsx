import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import OTPScreen from '../screens/OTPScreen';
import PhoneScreen from '../screens/PhoneScreen';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="phone"
        component={PhoneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="otp"
        component={OTPScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
