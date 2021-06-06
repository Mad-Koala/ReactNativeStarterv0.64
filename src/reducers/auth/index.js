import * as Types from 'constants/actionTypes';
const INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  errorMessage: '',
  loginData: null,
  sendotpData: null,
  verifyotpData: null,
  resetData: null,
  notificationData: null,
  sendOTPLoading: false,
  verifyOTPLoading: false,
  resetPassLoading: false,
  changingPassword: false,
  savedChatToken: null,
};
function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case Types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        // isLoggedIn: true,
        loginData: action.payload,
      });
    case Types.LOGIN_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedIn: false,
      });

    case Types.UPLOAD_IMAGE_REQUEST:
      return Object.assign({}, state, {
        uploadingImage: true,
      });
    case Types.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        uploadingImage: false,
      });
    case Types.UPLOAD_IMAGE_FAIL:
      return Object.assign({}, state, {
        uploadingImage: false,
      });
    case Types.NOTIFICATION_DETAILS:
      return Object.assign({}, state, {
        notificationData: action.payload,
      });

    case Types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        signingUp: true,
      });
    case Types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        signingUp: false,
      });
    case Types.SIGNUP_FAIL:
      return Object.assign({}, state, {
        signingUp: false,
      });

    case Types.SAVE_ADDRESS:
      return Object.assign({}, state, {
        savedAddress: action.payload,
      });

    case Types.LOGOUT:
      return INITIAL_STATE;

    case Types.SENDOTP_REQUEST:
      return Object.assign({}, state, {
        sendOTPLoading: true,
      });
    case Types.SENDOTP_SUCCESS:
      return Object.assign({}, state, {
        sendOTPLoading: false,
        sendotpData: action.payload,
      });
    case Types.SENDOTP_FAIL:
      return Object.assign({}, state, {
        sendOTPLoading: false,
      });
    case Types.VERIFYOTP_REQUEST:
      return Object.assign({}, state, {
        verifyOTPLoading: true,
      });
    case Types.VERIFYOTP_SUCCESS:
      return Object.assign({}, state, {
        verifyOTPLoading: false,
        verifyotpData: action.payload,
      });
    case Types.VERIFYOTP_FAIL:
      return Object.assign({}, state, {
        resetPassLoading: false,
      });
    case Types.RESET_REQUEST:
      return Object.assign({}, state, {
        resetPassLoading: true,
      });
    case Types.RESET_SUCCESS:
      return Object.assign({}, state, {
        resetPassLoading: false,
        resetData: action.payload,
      });
    case Types.RESET_FAIL:
      return Object.assign({}, state, {
        isLoading: false,
      });

    case Types.CHANGE_CURRENT_PASS_REQUEST:
      return Object.assign({}, state, {
        changingPassword: true,
      });
    case Types.CHANGE_CURRENT_PASS_SUCCESS:
      return Object.assign({}, state, {
        changingPassword: false,
      });
    case Types.CHANGE_CURRENT_PASS_FAIL:
      return Object.assign({}, state, {
        changingPassword: false,
      });
    case Types.SAVE_CHAT_TOKEN:
      return Object.assign({}, state, {
        savedChatToken: action.payload,
      });

    default:
      return state;
  }
}
export default authReducer;
