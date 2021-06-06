import {AppRegistry} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from 'store/setup';
import {registerScreens} from './src/config/routes';
import App from './src/hoc/withRedux';

Navigation.events().registerAppLaunchedListener(() => {
  registerScreens(store, Provider);
});
AppRegistry.registerComponent('DivineKrishi', () => App);
