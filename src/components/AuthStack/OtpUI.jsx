import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const OtpUI = ({phoneNumber, OtpHandler}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigation = useNavigation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');
  useEffect(() => {
    setIsButtonDisabled(
      !input1 || !input2 || !input3 || !input4 || !input5 || !input6,
    );
  }, [input1, input2, input3, input4, input5, input6]);

  const HandleOtp = () => {
    const reqData = {
      user: {
        phoneNumber: phoneNumber,
      },
      code: `${input1 + input2 + input3 + input4 + input5 + input6}`,
    };
    OtpHandler(reqData);
  };

  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex">
        <View className="flex flex-row justify-start">
          <TouchableOpacity
            className="bg-primary p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.navigate('phone')}>
            <MaterialIcons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-col items-center justify-center">
          <Text className="text-white text-3xl mt-4 font-semibold px-2 text-center">
            Enter Verifcation Code
          </Text>
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <View className="form space-y-2">
          <Text className="ml-4 text-gray-700 text-xl font-semibold text-center mb-5">
            We have sent the 6 digit OTP to {phoneNumber}
          </Text>
          <View className="flex-row gap-x-2 justify-center mb-5">
            <TextInput
              ref={ref1}
              value={input1}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput1(text);
                  ref2.current.focus();
                } else if (text.length === 0) {
                  setInput1('');
                  ref1.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref2}
              value={input2}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput2(text);
                  ref3.current.focus();
                } else if (text.length === 0) {
                  setInput2('');
                  ref1.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref3}
              value={input3}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput3(text);
                  ref4.current.focus();
                } else if (text.length === 0) {
                  setInput3('');
                  ref2.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref4}
              value={input4}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput4(text);
                  ref5.current.focus();
                } else if (text.length === 0) {
                  setInput4('');
                  ref3.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref5}
              value={input5}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput5(text);
                  ref6.current.focus();
                } else if (text.length === 0) {
                  setInput5('');
                  ref4.current.focus();
                }
              }}
            />
            <TextInput
              ref={ref6}
              value={input6}
              className="px-5 py-4 border-2 bg-gray-100 text-gray-700 rounded-xl "
              keyboardType="numeric"
              maxLength={1}
              placeholder="0"
              onChangeText={text => {
                if (text.length <= 1 && text.length > 0) {
                  setInput6(text);
                  ref6.current.focus();
                } else if (text.length === 0) {
                  setInput6('');
                  ref5.current.focus();
                }
              }}
            />
          </View>

          <TouchableOpacity
            disabled={isButtonDisabled}
            className={`py-3 bg-primary  flex justify-center rounded-xl  ${
              isButtonDisabled ? 'opacity-50' : ''
            }`}
            onPress={HandleOtp}>
            <Text className="text-white text-xl font-bold text-center">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtpUI;
