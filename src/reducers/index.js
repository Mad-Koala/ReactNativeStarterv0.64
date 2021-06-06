// @ts-nocheck
import {combineReducers} from 'redux';
import authReducer from 'reducers/auth';
import persistDataReducer from 'reducers/persistData';

const applicationReducer = combineReducers({
  authReducer,
  persistDataReducer,
});

export default applicationReducer;
