/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { AuthProvider } from './route/AuthProvider';
import Router from './route/Router';
import { default as mapping } from './mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeContext } from './theme-context';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

 
const App = ()=> {
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '1046611894289-uvk692nhcebcismsbphu0i411t7q18er.apps.googleusercontent.com',
    });
    console.log("CONFIGURED")
},[])
  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  return (
    <>

    <IconRegistry icons={EvaIconsPack}/>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <ApplicationProvider {...eva} theme={eva[theme]} customMapping={mapping}>
    <AuthProvider>
      <Router/>
    </AuthProvider>
    </ApplicationProvider>
    </ThemeContext.Provider>
    </>
  );
};

export default App;
