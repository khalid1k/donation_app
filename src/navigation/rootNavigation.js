import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Authenticated, NonAuthenticated } from './mainNavigation';
import { resetNavigation } from './navigationRef';
import { Routes } from './routes';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  const prevAuthState = React.useRef(user.isLoggedIn);
  useEffect(() => {
    if (prevAuthState.current === true && user.isLoggedIn === false) {
      resetNavigation(Routes.Login);
    }
    prevAuthState.current = user.isLoggedIn;
  }, [user.isLoggedIn]);

  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
