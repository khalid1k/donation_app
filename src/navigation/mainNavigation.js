import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import Home from '../screens/Home/home';
import SingleDonationItem from '../screens/SingleDonationItem/singleDonationItem';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};
