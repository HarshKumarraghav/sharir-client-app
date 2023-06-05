import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const LoginUI = () => {
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
              width: 250,
              height: 250,
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
          <Text className="ml-4 text-gray-700">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={''}
            placeholder="Enter the Email"
          />
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            secureTextEntry={true}
            value={''}
            placeholder="Enter the Password"
          />
          <TouchableOpacity
            className="flex items-end mb-5"
            onPress={() => navigation.navigate('phone')}>
            <Text className="text-gray-700">login without Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-primary  flex justify-center rounded-xl shadow-sm"
            onPress={() => navigation.navigate('home')}>
            <Text className="text-white text-xl font-bold text-center">
              Login
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center items-center">
            <View
              className="bg-primary h-0.5 w-1/3 mr-2"
              style={{borderRadius: 50}}
            />
            <Text className="">OR</Text>
            <View
              className="bg-primary h-0.5 w-1/3 ml-2"
              style={{borderRadius: 50}}
            />
          </View>

          <View className="flex-row justify-center">
            <Text className="text-gray-700">Don't have an account?</Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('signup')}>
              <Text className="font-semibold text-primary"> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginUI;
