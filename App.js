import { Provider } from 'react-redux';
import { AppState } from 'react-native';
import { useEffect, useRef } from 'react';
import RootNavigation from './src/navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { refreshAuthToken } from './src/api/user';
import BootSplash from 'react-native-bootsplash';

function App() {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    // Set up AppState listener
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await refreshAuthToken();
        }
        appState.current = nextAppState;
      },
    );

    const init = async () => {
      await refreshAuthToken();
    };

    const timeoutId = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 3000);

    init().finally(() => {
      clearTimeout(timeoutId);
      BootSplash.hide({ fade: true });
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
