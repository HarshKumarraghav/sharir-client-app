import {useState, useEffect, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext<any>(null);
const AuthProvider = ({children}: any) => {
  const [authData, setAuthData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    loadStorageData();
  }, []);
  const loadStorageData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      const access_token = await AsyncStorage.getItem('access_token');
      if (value === 'true' && access_token) {
        setAuthData({access_token: access_token});
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('access_token');
      setAuthData(null);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AuthContext.Provider
      value={{authData, setAuthData, loading, setMessages, messages, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export {AuthContext, AuthProvider, useAuth};
