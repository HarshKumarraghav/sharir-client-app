import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const SignUpUI = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex">
        <View className="flex flex-row justify-start">
          <TouchableOpacity
            className="bg-primary p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.navigate('home')}>
            <MaterialIcons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/Auth/login.png')}
            style={{
              width: 300,
              height: 200,
            }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View className="form space-y-2">
          <Text className="ml-4 text-gray-700">User Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={''}
            placeholder="Enter the User Name"
          />
          <Text className="ml-4 text-gray-700">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={''}
            placeholder="Enter the Email"
          />
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl mb-5"
            secureTextEntry={true}
            value={''}
            placeholder="Enter the Password"
          />

          <TouchableOpacity
            className="py-3 bg-primary  flex justify-center rounded-xl"
            onPress={() => navigation.navigate('home')}>
            <Text className="text-white text-xl font-bold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-gray-700">Already have an account?</Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('login')}>
              <Text className="font-semibold text-primary"> login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpUI;
