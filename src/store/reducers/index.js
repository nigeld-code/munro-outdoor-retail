import { combineReducers } from 'redux';

import configReducer from './config';
import authReducer from './auth';
import basketReducer from './basket';

export default combineReducers({
  config: configReducer,
  auth: authReducer,
  basket: basketReducer
});
