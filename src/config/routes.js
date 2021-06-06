// @ts-nocheck
// // @ts-nocheck
import {Navigation} from 'react-native-navigation';
import withRedux from 'hoc/withRedux';
import {lazy} from 'react';
const Login = lazy(() => import('screens/auth/login'));
const AppIntro = lazy(() => import('screens/appIntro/Appintro'));
const Dashboard = lazy(() => import('screens/dashboard'));

export const registerScreens = (store, Provider) => {
  const withReduxStore = withRedux(store);
  Navigation.registerComponentWithRedux('AppIntro', withReduxStore(AppIntro));
  Navigation.registerComponentWithRedux('Login', withReduxStore(Login));
  Navigation.registerComponentWithRedux('Dashboard', withReduxStore(Dashboard));
};
