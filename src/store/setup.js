import AsyncStorage from '@react-native-community/async-storage';
import idx from 'idx';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {authorization, dashboard} from '../config/index';
import rootReducer from '../reducers';
import array from './array';
import promise from './promise';
import whitelist from './whitelist';

export const storeObj = {};
const persistConfig = {
  timeout: 15000,
  whitelist,
  key: 'root',
  storage: AsyncStorage,
};

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middlewares, ...[thunk, promise, array]),
);

export const persistor = persistStore(store, {}, () => {
  // Session Managemanet check here
  let userLoggedIn = idx(
    store,
    _ => _.getState().authReducer.loginData.data.token,
  );

  let appIntroStatus = idx(
    store,
    _ => _.getState().authReducer.loginData.data.userLogin.role,
  );
  if (!appIntroStatus) {
    // appIntro();
    dashboard();
  } else if (userLoggedIn) {
    dashboard();
  } else {
    authorization();
  }

  return store;
});
