/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import { NavigationContainer, TabRouter } from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ExamDetails from './screen/ExamDetails';
import HomePage from './screen/HomePage';
import DetailsPage from './screen/DetailsPage';
import SigninPage from './screen/SigninPage';
import Login from './screen/LoginPage';
import route from './route/route';
import { AuthProvider } from './route/AuthProvider';
import Router from './route/Router';
import CareerPath from './screen/CareerPathPage';

const App = ()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
