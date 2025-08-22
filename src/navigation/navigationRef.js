import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const resetNavigation = routeName => {
  if (navigationRef.isReady()) {
    try {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName }],
        }),
      );
    } catch (error) {
      console.log('Navigation reset during transition (expected)');
    }
  }
};
