import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import Home from '../screens/Home/home';
import SingleDonationItem from '../screens/SingleDonationItem/singleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{ header: () => null, headerShown: false }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
