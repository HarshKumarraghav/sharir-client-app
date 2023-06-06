import {View, Text} from 'react-native';
import React from 'react';
import OtpUI from '../components/AuthStack/OtpUI';
import {SHARIR_API} from '../../Service/Api/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../Context/AuthContext';
const OTPScreen = ({route}: any) => {
  const {setAuthData} = useAuth();
  const phoneNumber = route?.params?.phone;
  const OtpHandler = async (reqData: any) => {
    const RequestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reqData),
    };
    const response = await fetch(`${SHARIR_API}auth/verifyotp`, RequestOption);
    const data = await response.json();
    if (response.status !== 200) {
      console.log(data);
    } else {
      await AsyncStorage.setItem('access_token', data.token);
      await AsyncStorage.setItem('isLoggedIn', 'true');
      const _authData = {
        access_token: data.token,
        isLoggedIn: true,
      };
      setAuthData(_authData);
    }
  };

  return <OtpUI phoneNumber={phoneNumber} OtpHandler={OtpHandler} />;
};

export default OTPScreen;
