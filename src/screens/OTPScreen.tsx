import {View, Text} from 'react-native';
import React from 'react';
import OtpUI from '../components/AuthStack/OtpUI';
const OTPScreen = ({route}: any) => {
  const phoneNumber = route.params.phone;
  console.log('number', phoneNumber);
  return <OtpUI phoneNumber={phoneNumber} />;
};

export default OTPScreen;
