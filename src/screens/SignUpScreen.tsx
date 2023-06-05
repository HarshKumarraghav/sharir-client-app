import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignUpUI from '../components/AuthStack/SignUpUI';
import {SHARIR_API} from '../../Service/Api/API';
import {useNavigation, NavigationProp} from '@react-navigation/native';
type SignupInfo = {
  username: string;
  email: string;
  phone: string;
  password: string;
};
type RootStackParamList = {
  login: undefined;
};

type SignUpScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'login'>;
};

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenProps['navigation']>();
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  const ClearForm = () => {
    setSignupInfo({
      username: '',
      email: '',
      phone: '',
      password: '',
    });
  };
  const SinupHandler = async (data: SignupInfo) => {
    const RequestQptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    };
    const response = await fetch(SHARIR_API + 'auth/register', RequestQptions);
    const resdata = await response.json();
    if (!response.ok) {
      console.log(resdata);
    } else {
      ClearForm();
      navigation.navigate('login');
    }
  };
  return (
    <SignUpUI
      signupInfo={signupInfo}
      setSignupInfo={setSignupInfo}
      SinupHandler={SinupHandler}
    />
  );
};

export default SignUpScreen;
