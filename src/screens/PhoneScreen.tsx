import React from 'react';
import PhoneUI from '../components/AuthStack/PhoneUI';
import {SHARIR_API} from '../../Service/Api/API';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  otp: {phone: string};
  phone: undefined;
};

type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'otp'>;
};

const PhoneScreen = () => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const [phone, setPhone] = React.useState('');

  const PhoneNumberHandler = async (phone: string) => {
    const RequestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({phonenumber: phone}),
    };
    const response = await fetch(`${SHARIR_API}auth/sendotp`, RequestOption);
    const data = await response.json();
    if (response.status !== 200) {
      console.log(data);
    } else {
      navigation.navigate('otp', {phone: phone});
    }
  };

  return (
    <PhoneUI
      phone={phone}
      setPhone={setPhone}
      PhoneNumberHandler={PhoneNumberHandler}
    />
  );
};

export default PhoneScreen;
