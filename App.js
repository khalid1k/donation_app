import { Provider } from 'react-redux';
import { AppState } from 'react-native';
import { useEffect, useRef } from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { refreshAuthToken } from './src/api/user';
import BootSplash from 'react-native-bootsplash';
import { navigationRef } from './src/navigation/navigationRef';

function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('You have come back into the app');
          await refreshAuthToken();
          //we are coming from background to the foreground
        }

        appState.current = nextAppState;
      },
    );
    refreshAuthToken();
    console.log('Application has rendered');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}
          ref={navigationRef}
        >
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
