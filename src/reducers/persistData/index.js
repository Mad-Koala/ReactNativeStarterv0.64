import * as Types from 'constants/actionTypes';
const INITIAL_STATE = {
  appIntroStatus: false,
};
function persistDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.APP_INTRO:
      return Object.assign({}, state, {
        appIntroStatus: true,
      });

    default:
      return state;
  }
}
export default persistDataReducer;
