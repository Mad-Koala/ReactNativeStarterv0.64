
import * as types from 'constants/actionTypes';
import RestClient from 'helpers/restClient';
import API from 'constants/api';
import {
  navigatorPush,
  navigatorPop,
  navigatorRoot,
} from 'config/navigationOptions';
import Toast from 'react-native-simple-toast';
import idx from 'idx';
export const login = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.LOGIN_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.LOGIN,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.LOGIN_SUCCESS, payload: response});
        if (
          response.data.userLogin.role == 'Agent' ||
          response.data.userLogin.role == 'agent'
        ) {
          navigatorPush({componentId, screenName: 'AgentDashboard'});
        } else {
          navigatorPush({componentId, screenName: 'SearchCity'});
        }
      } else {
        dispatch({type: types.LOGIN_FAIL});
      }
    } catch (error) {
      dispatch({type: types.LOGIN_FAIL});
    }
  };
};
export const signup = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.SIGNUP_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.SIGNUP,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.SIGNUP_SUCCESS, payload: response});
        navigatorPush({componentId, screenName: 'Login'});
      } else {
        dispatch({type: types.SIGNUP_FAIL});
      }
    } catch (error) {
      dispatch({type: types.SIGNUP_FAIL});
    }
  };
};

export const changeCurrentPassword = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.CHANGE_CURRENT_PASS_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.CHANGE_CURRENT_PASS,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.CHANGE_CURRENT_PASS_SUCCESS, payload: response});
        navigatorPop({componentId});
      } else {
        dispatch({type: types.CHANGE_CURRENT_PASS_FAIL});
      }
    } catch (error) {
      dispatch({type: types.CHANGE_CURRENT_PASS_FAIL});
    }
  };
};

export const sendotp = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.SENDOTP_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.RESET_OTP,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.SENDOTP_SUCCESS, payload: response});
        navigatorPush({componentId, screenName: 'VerifyOTP'});
      } else {
        dispatch({type: types.SENDOTP_FAIL});
      }
    } catch (error) {
      dispatch({type: types.SENDOTP_FAIL});
    }
  };
};
export const verifyotp = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.VERIFYOTP_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.VERIFY_OTP,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.VERIFYOTP_SUCCESS, payload: response});
        navigatorPush({componentId, screenName: 'Reset'});
      } else {
        dispatch({type: types.VERIFYOTP_FAIL});
      }
    } catch (error) {
      dispatch({type: types.VERIFYOTP_FAIL});
    }
  };
};
export const reset = (requestPayload, componentId) => {
  return async (dispatch) => {
    dispatch({type: types.RESET_REQUEST});
    try {
      const response = await RestClient.postCall(
        API.RESET_PASSWORD,
        requestPayload,
        true,
      );
      if (response) {
        if (response.success == true) {
          dispatch({type: types.RESET_SUCCESS, payload: response});
          navigatorPush({componentId, screenName: 'Login'});
        } else {
          dispatch({type: types.RESET_FAIL});
          Toast.show(response.msg);
        }
      } else {
        dispatch({type: types.RESET_FAIL});
      }
    } catch (error) {
      dispatch({type: types.RESET_FAIL});
    }
  };
};

export const saveAddress = (status) => {
  return (dispatch, getState) => {
    dispatch({type: types.SAVE_ADDRESS, payload: status});
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    let deviceToken = idx(
      getState(),
      (_) => _.authReducer.notificationData.fcmToken,
    );
    let requestPayload = {
      deviceToken: deviceToken,
    };
    try {
      const response = await RestClient.postCall(
        API.LOGOUT,
        requestPayload,
        true,
      );
      if (response) {
        dispatch({type: types.LOGOUT});
      }
    } catch (error) {
      dispatch({type: types.LOGOUT});
    }
  };
};

export const notificationDetails = (data) => {
  return (dispatch, getState) => {
    dispatch({type: types.NOTIFICATION_DETAILS, payload: data});
  };
};
