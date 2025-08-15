import { View, Text } from 'react-native';
import { MainNavigation } from './src/navigation/mainNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
