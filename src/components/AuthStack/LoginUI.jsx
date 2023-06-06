import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const LoginUI = ({loginInfo, setLoginInfo, LoginHandler}) => {
  const navigation = useNavigation();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});
  useEffect(() => {
    setIsButtonDisabled(!loginInfo.phonenumber || !loginInfo.password);
  }, [loginInfo]);
  const HandleLogin = () => {
    if (validateInput()) {
      const reqData = {
        phonenumber: '+91' + loginInfo.phonenumber,
        password: loginInfo.password,
      };
      LoginHandler(reqData);
    } else {
      console.log('Please enter valid credentials', validationErrors);
    }
  };
  const validateInput = () => {
    const errors = {};

    // Validate phone number
    if (!loginInfo.phonenumber) {
      errors.phone = 'Please enter a phone number';
    } else if (
      loginInfo.phonenumber.length !== 10 ||
      !/^\d+$/.test(loginInfo.phonenumber)
    ) {
      errors.phonenumber = 'Please enter a valid 10-digit phone number';
    }
    // Validate password
    if (!loginInfo.password) {
      errors.password = 'Please enter a password';
    } else if (loginInfo.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/\d/.test(loginInfo.password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/[a-z]/.test(loginInfo.password)) {
      errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(loginInfo.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/\W/.test(loginInfo.password)) {
      errors.password = 'Password must contain at least one special character';
    }
    setValidationErrors(errors);
    // Return true if there are no validation errors
    return Object.keys(errors).length === 0;
  };
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
          <Text className="ml-4 text-gray-700">Enter Phone Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={loginInfo.phonenumber}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={text =>
              setLoginInfo({...loginInfo, phonenumber: text})
            }
            placeholder="Enter the phone number"
          />
          {validationErrors.phonenumber && (
            <Text className="text-red-600 ml-5">
              {validationErrors.phonenumber}
            </Text>
          )}
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            secureTextEntry={true}
            value={loginInfo.password}
            onChangeText={text => setLoginInfo({...loginInfo, password: text})}
            placeholder="Enter the Password"
          />
          {validationErrors.password && (
            <Text className="text-red-600 ml-5">
              {validationErrors.password}
            </Text>
          )}
          <TouchableOpacity
            className="flex items-end mb-5"
            onPress={() => navigation.navigate('phone')}>
            <Text className="text-gray-700">login without Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`py-3 bg-primary  flex justify-center rounded-xl  ${
              isButtonDisabled ? 'opacity-50' : ''
            }`}
            disabled={isButtonDisabled}
            onPress={HandleLogin}>
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
