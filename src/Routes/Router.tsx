import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Loading from '../Loader/Loading';
import {useAuth} from '../Context/AuthContext';
const Router = () => {
  const {authData, loading} = useAuth();
  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
