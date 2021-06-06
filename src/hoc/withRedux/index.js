// @ts-nocheck
// import socket from 'helpers/sockets';
import Colors from 'constants/color';
import React, {createRef, PureComponent, Suspense} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
// import ErrorUtilsFunction from 'utils/errorManager';
// import PermissionManager from 'utils/permissionManager';
export const ThemeContext = React.createContext('light');
import RNBootSplash from 'react-native-bootsplash';

const withRedux = store => WrappedComponent => () => {
  class ReduxWrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.componentRef = createRef();
      this.state = {
        flag: false,
        appState: true,
      };

      this._initialApicalls();
    }

    _initialApicalls = () => {
      // PermissionManager(response => {});
      // ErrorUtilsFunction();
      RNBootSplash.hide({fade: true}); // fade
    };

    render() {
      return (
        <Provider store={store}>
          <ThemeContext.Provider value="dark">
            <Suspense
              fallback={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator />
                </View>
              }>
              <SafeAreaView
                style={{backgroundColor: Colors.Primary}}></SafeAreaView>
              <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
              <SafeAreaView></SafeAreaView>
            </Suspense>
          </ThemeContext.Provider>
        </Provider>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ReduxWrapper {...props} forwardedRef={ref} />;
  });
};

export default withRedux;
