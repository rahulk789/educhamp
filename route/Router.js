
import {NavigationContainer} from '@react-navigation/native';

import React, {useContext, useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import firestore from '@react-native-firebase/firestore';


export default function Router() {

  const {user,setUser,setName} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    function getUsername(documentSnapshot) {
      return documentSnapshot.get('name');
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
    if(user){
      firestore()
  .collection('users')
  .doc(auth().currentUser.uid)
  .get()
  .then(documentSnapshot => getUsername(documentSnapshot))
  .then(name => {
    setName(name);
  });
}
    if (initializing) return null;
return (
    <NavigationContainer>
        {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
)
}