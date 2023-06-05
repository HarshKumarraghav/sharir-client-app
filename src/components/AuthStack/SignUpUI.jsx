import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignUpUI = ({signupInfo, setSignupInfo, SinupHandler}) => {
  const [validationErrors, setValidationErrors] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  /* The `useEffect` hook is used to update the state of `isButtonDisabled` whenever there is a change in
the `signupInfo` object. It checks if any of the required fields (`username`, `phone`, `email`,
`password`) are empty or not. If any of these fields are empty, `isButtonDisabled` is set to `true`,
which disables the sign-up button. If all the required fields have values, `isButtonDisabled` is set
to `false`, which enables the sign-up button. */
  useEffect(() => {
    setIsButtonDisabled(
      !signupInfo.username ||
        !signupInfo.phone ||
        !signupInfo.email ||
        !signupInfo.password,
    );
  }, [signupInfo]);
  /**
   * The function validates user input for a signup form and returns true if there are no errors.
   * @returns The function `validateInput` is returning a boolean value indicating whether there are any
   * validation errors or not. It returns `true` if there are no validation errors, and `false` if there
   * are any validation errors.
   */
  const validateInput = () => {
    const errors = {};

    // Validate username
    if (!signupInfo.username) {
      errors.username = 'Please enter a username';
    }

    // Validate phone number
    if (!signupInfo.phone) {
      errors.phone = 'Please enter a phone number';
    } else if (
      signupInfo.phone.length !== 10 ||
      !/^\d+$/.test(signupInfo.phone)
    ) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate email
    if (!signupInfo.email) {
      errors.email = 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(signupInfo.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!signupInfo.password) {
      errors.password = 'Please enter a password';
    } else if (signupInfo.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/\d/.test(signupInfo.password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/[a-z]/.test(signupInfo.password)) {
      errors.password = 'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(signupInfo.password)) {
      errors.password = 'Password must contain at least one uppercase letter';
    } else if (!/\W/.test(signupInfo.password)) {
      errors.password = 'Password must contain at least one special character';
    }
    setValidationErrors(errors);
    // Return true if there are no validation errors
    return Object.keys(errors).length === 0;
  };

  /**
   * The function handles sign up by validating input and sending the data to a handler function.
   */
  const handleSignUp = () => {
    if (validateInput()) {
      const reqData = {
        username: signupInfo.username,
        phonenumber: `+91${signupInfo.phone}`,
        email: signupInfo.email,
        password: signupInfo.password,
      };
      SinupHandler(reqData);
    } else {
      console.log('Sign up failed. Please fix the validation errors.');
    }
  };
  /* This is the UI component for a sign-up form in a React Native app. It includes various input fields
for the user to enter their information, such as their username, phone number, email, and password.
It also includes validation for each input field to ensure that the user enters valid information.
Once the user has entered all the required information, they can click the "Sign Up" button to
submit their information and create an account. The component also includes a link to the login page
for users who already have an account. */
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-primary p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.navigate('home')}>
            <MaterialIcons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/Auth/Signup.png')}
            style={{
              width: 200,
              height: 200,
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
          <Text className="ml-4 text-gray-700">User Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={signupInfo.username}
            onChangeText={text =>
              setSignupInfo({...signupInfo, username: text})
            }
            placeholder="Enter the User Name"
          />
          <Text className="ml-4 text-gray-700">Enter the Phone Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={signupInfo.phone}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={text => setSignupInfo({...signupInfo, phone: text})}
          />
          {validationErrors.phone && (
            <Text className="text-red-600 ml-5">{validationErrors.phone}</Text>
          )}
          <Text className="ml-4 text-gray-700">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl"
            value={signupInfo.email}
            keyboardType="email-address"
            onChangeText={text => setSignupInfo({...signupInfo, email: text})}
            placeholder="Enter the Email"
          />
          {validationErrors.email && (
            <Text className="text-red-600 ml-5">{validationErrors.email}</Text>
          )}
          <Text className="ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-xl mb-5"
            secureTextEntry={true}
            value={signupInfo.password}
            onChangeText={text =>
              setSignupInfo({...signupInfo, password: text})
            }
            placeholder="Enter the Password"
          />
          {validationErrors.password && (
            <Text className="text-red-600 ml-5">
              {validationErrors.password}
            </Text>
          )}
          <TouchableOpacity
            className={`py-3 bg-primary  flex justify-center rounded-xl  ${
              isButtonDisabled ? 'opacity-50' : ''
            }`}
            onPress={handleSignUp}
            disabled={isButtonDisabled}>
            <Text className="text-white text-xl font-bold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-gray-700">Already have an account?</Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('login')}>
              <Text className="font-semibold text-primary"> login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpUI;
