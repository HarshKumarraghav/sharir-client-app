import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../Context/AuthContext';

const AppStack = () => {
  const {signOut} = useAuth();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}>
        <Text>sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppStack;
