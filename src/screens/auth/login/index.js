import Header from 'components/common/authHeader';
import {navigatorPush} from 'config/navigationOptions';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import * as Validator from 'utils/combinedValidations';
const Login = props => {
  const {login, componentId, loading, signUp, terms} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _onLoginPressed = () => {
    let allowLogin = Validator.LoginValidation(email, password);
    if (allowLogin) {
      login(email, password);
    }
  };

  const _onForgotPressed = () => {
    navigatorPush({componentId, screenName: 'SendOTP'});
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header />
      <KeyboardAwareScrollView
        style={{flexGrow: 1, padding: RFValue(20), backgroundColor: 'green'}}
        keyboardShouldPersistTaps="handled"></KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {},
  link: {
    fontWeight: 'bold',
  },
});

export default Login;
