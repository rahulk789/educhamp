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

import { NavigationContainer } from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
<<<<<<< HEAD
import HomePage from './screen/HomePage';
import CareerPath from './screen/CareerPath';
=======
import DetailsPage from './screen/DetailsPage';
>>>>>>> 8876841e2a2bd78a1ce6cca28322d4248f28fd87


const App = ()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
<<<<<<< HEAD
     <HomePage/>
=======
      <DetailsPage/>
>>>>>>> 8876841e2a2bd78a1ce6cca28322d4248f28fd87
    </NavigationContainer>
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
