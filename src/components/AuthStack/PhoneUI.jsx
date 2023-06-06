import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const PhoneUI = ({phone, setPhone, PhoneNumberHandler}) => {
  const [validationErrors, setValidationErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    setIsButtonDisabled(!phone);
  }, [phone]);
  const validateInput = () => {
    const errors = {};
    if (!phone) {
      errors.phone = 'Please enter a phone number';
    } else if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const HandleSubmit = () => {
    if (validateInput()) {
      const actualPhone = '+91' + phone;
      PhoneNumberHandler(actualPhone);
    } else {
      console.log('Please enter valid credentials', validationErrors);
    }
  };

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
        <View className="flex-col items-center justify-center">
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
          <Text className="ml-4 text-gray-700">Enter the Phone Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl mb-5"
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
          />
          {validationErrors.phone && (
            <Text className="text-red-600 ml-5">{validationErrors.phone}</Text>
          )}

          <TouchableOpacity
            className={`py-3 bg-primary  flex justify-center rounded-xl  ${
              isButtonDisabled ? 'opacity-50' : ''
            }`}
            onPress={HandleSubmit}
            disabled={isButtonDisabled}>
            <Text className="text-white text-xl font-bold text-center">
              Continue
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
            <Text className="text-gray-700">Login with password?</Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('login')}>
              <Text className="font-semibold text-primary"> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PhoneUI;
