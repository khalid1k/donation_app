import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logger } from 'redux-logger';
import userReduer from './reducers/user';
import categoriesReducer from './reducers/categories';
import donationReducer from './reducers/donations';

const rootReducer = combineReducers({
  user: userReduer,
  categories: categoriesReducer,
  donations: donationReducer,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
  },
});

export const persistor = persistStore(store);
