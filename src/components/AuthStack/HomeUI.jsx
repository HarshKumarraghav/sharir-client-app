import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const HomeUI = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 flex justify-around my-2">
        <Text className="text-4xl text-center font-head text-white">
          Sharir
        </Text>
        <Text className="text-4xl text-center font-bold text-white">
          Lets get started!
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/Auth/home.png')}
            style={{
              width: 350,
              height: 350,
            }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            className="py-3 bg-primary mx-7 rounded-xl"
            onPress={() => navigation.navigate('signup')}>
            <Text className="text-white text-xl font-bold text-center">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white">Already have an account?</Text>
            <TouchableOpacity
              className=""
              onPress={() => navigation.navigate('login')}>
              <Text className="font-semibold text-yellow-600">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeUI;
