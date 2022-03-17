
import {NavigationContainer} from '@react-navigation/native';

import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default function Router() {

  const {user,setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
return (
    <NavigationContainer>
        {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
)
}