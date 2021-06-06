import * as types from 'constants/actionTypes';
export const setIntroStatus = () => {
  return (dispatch, getState) => {
    dispatch({type: types.APP_INTRO, payload: true});
  };
};
