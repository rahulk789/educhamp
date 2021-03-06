import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
import React, {useState, useEffect} from 'react';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Home Page" component = {route.HOME} />
            <Stack.Screen name = "Exam Detail" component={route.EXAMDETAIL}/>
            <Stack.Screen name = "Academics Page" component = {route.ACADEMICS} />
            <Stack.Screen name = "Career Page" component = {route.CAREER} />
            <Stack.Screen name = "Chat Screen" component = {route.CHATSCREEN} />
            <Stack.Screen name = "Exam Details" component = {route.EXAMDETAILS} />
        </Stack.Navigator>
    );
}

export default AppStack;