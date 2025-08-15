import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import Home from '../screens/Home/home';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};
