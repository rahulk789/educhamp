
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';


export const Router = () => {

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};