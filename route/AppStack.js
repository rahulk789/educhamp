import {createStackNavigator} from '@react-navigation/stack';
import route from './route';
const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name = "Home Page" component = {route.HOME} />
        </Stack.Navigator>
    );
}

export default AppStack;