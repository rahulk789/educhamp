import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
import React, {useState, useEffect} from 'react';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
<<<<<<< HEAD
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen" component={route.SPLASH} options={{headerShown: false}} />
        <Stack.Screen name="Email Screen" component={route.LOGIN} options={{headerShown: false}}/>
        <Stack.Screen name="OTP Screen" component={route.OTP} options={{headerShown: false}}/>
        <Stack.Screen name="Phone Screen" component={route.PHONE} options={{headerShown: false}} />
        <Stack.Screen name="Sign In Screen" component={route.SIGNIN} options={{headerShown: false}}/>
        <Stack.Screen name = "Details Page" component = {route.DETAILSPAGE} options={{headerShown: false}}/>
        <Stack.Screen name = "Error Screen" component = {route.ERROR} options={{headerShown: false}}/>
=======
      <Stack.Navigator screenOption = {{headerShown: false}}>
        {/* <Stack.Screen name="Splash Screen" component={route.SPLASH} /> */}
        <Stack.Screen name="Log In Screen" component={route.LOGIN} options={{headerShown: false}}/>
        <Stack.Screen name="Sign In Screen" component={route.SIGNIN} options={{headerShown: false}} />
        <Stack.Screen name = "Details Page" component = {route.DETAILSPAGE} options={{headerShown: false}} />
>>>>>>> cd0e2ec198fcc73147c86f0c48cf17c18ffdba4e
      </Stack.Navigator>
    );
  };

export default AuthStack;