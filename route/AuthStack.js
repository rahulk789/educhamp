import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
import React, {useState, useEffect} from 'react';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen" component={route.SPLASH} options={{headerShown: false}} />
        <Stack.Screen name="Email Screen" component={route.LOGIN} options={{headerShown: false}}/>
        <Stack.Screen name="OTP Screen" component={route.OTP} options={{headerShown: false}}/>
        <Stack.Screen name="Phone Screen" component={route.PHONE} options={{headerShown: false}} />
        <Stack.Screen name="Sign In Screen" component={route.SIGNIN} options={{headerShown: false}}/>
        <Stack.Screen name = "Details Page" component = {route.DETAILSPAGE} options={{headerShown: false}}/>
        <Stack.Screen name = "Error Screen" component = {route.ERROR} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  };

export default AuthStack;