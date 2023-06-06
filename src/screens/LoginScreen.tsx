import React, {useState} from 'react';
import LoginUI from '../components/AuthStack/LoginUI';
import {SHARIR_API} from '../../Service/Api/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../Context/AuthContext';
import {useNavigation, NavigationProp} from '@react-navigation/native';
type LoginInfo = {
  phonenumber: string;
  password: string;
};
type RootStackParamList = {
  login: undefined;
};
type LoginScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'login'>;
};

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const {setAuthData} = useAuth();
  const [loginInfo, setLoginInfo] = useState({
    phonenumber: '',
    password: '',
  });
  const ClearFormData = () => {
    setLoginInfo({
      phonenumber: '',
      password: '',
    });
  };
  const LoginHandler = async (reqData: LoginInfo) => {
    const RequestOption = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reqData),
    };
    const response = await fetch(`${SHARIR_API}auth/login`, RequestOption);
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
      ClearFormData();
    }
  };

  return (
    <LoginUI
      loginInfo={loginInfo}
      setLoginInfo={setLoginInfo}
      LoginHandler={LoginHandler}
    />
  );
};

export default LoginScreen;
