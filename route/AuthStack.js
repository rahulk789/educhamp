import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
      <Stack.Navigator screenOption = {{headerShown: false}}>
        <Stack.Screen name="Log In Screen" component={route.LOGIN} />
        <Stack.Screen name="Sign In Screen" component={route.SIGNIN} />
      </Stack.Navigator>
    );
  };

export default AuthStack;