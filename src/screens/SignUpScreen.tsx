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
/**
 * The above type defines a stack navigator with a single screen named "login".
 * @property login - `RootStackParamList` is a type definition for the navigation stack parameters in a
 * React Native app. It defines a single parameter called `login`, which has a value of `undefined`.
 * This means that the `login` parameter is expected to be passed to the navigation stack, but it does
 * not
 */
type RootStackParamList = {
  login: undefined;
};

/**
 * The type SignUpScreenProps is a TypeScript interface that defines the props expected by a sign-up
 * screen component in a React application, including a navigation prop of type NavigationProp.
 * @property navigation - The `navigation` property is a prop that is passed to a component when it is
 * rendered as a screen in a React Navigation stack. It is used to navigate between screens in the
 * stack and can be used to push, pop, or replace screens. In this case, the `navigation` prop is
 */
type SignUpScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'login'>;
};

const SignUpScreen = () => {
  /* `const navigation = useNavigation<SignUpScreenProps['navigation']>();` is using the `useNavigation`
hook from the `@react-navigation/native` library to get access to the navigation prop in the
`SignUpScreen` component. The `navigation` variable is then assigned the type
`NavigationProp<RootStackParamList, 'login'>`, which specifies that it is a navigation prop for the
`RootStackParamList` stack navigator with a single screen named "login". This allows the
`SignUpScreen` component to navigate to the "login" screen using the `navigation.navigate` method. */
  const navigation = useNavigation<SignUpScreenProps['navigation']>();
  /* This line of code is declaring a state variable called `signupInfo` and a function called
 `setSignupInfo` to update it, using the `useState` hook. The initial value of `signupInfo` is an
 object of type `SignupInfo` with empty strings as values for the `username`, `email`, `phone`, and
 `password` properties. This state variable is used to store the user's input in the sign-up form. */
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    username: '',
    email: '',
    phone: '',
    password: '',
  });
  /**
   * The function clears the values of a signup form.
   */
  const ClearForm = () => {
    setSignupInfo({
      username: '',
      email: '',
      phone: '',
      password: '',
    });
  };
  /**
   * This function sends a POST request to a server to register a user and navigates to the login page if
   * successful.
   * @param {SignupInfo} data - The `data` parameter is an object of type `SignupInfo` which contains the
   * user's information needed for registration. This information is then sent to the server for
   * processing.
   */
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
  /* This code is returning a JSX element that is rendering the `SignUpUI` component with three props:
`signupInfo`, `setSignupInfo`, and `SinupHandler`. These props are being passed down from the
`SignUpScreen` component to the `SignUpUI` component. */
  return (
    <SignUpUI
      signupInfo={signupInfo}
      setSignupInfo={setSignupInfo}
      SinupHandler={SinupHandler}
    />
  );
};

export default SignUpScreen;
