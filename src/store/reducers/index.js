import { combineReducers } from 'redux';

import configReducer from './config';
import authReducer from './auth';
import basketReducer from './basket';
import voucherCodeReducer from './voucherCode';

export default combineReducers({
  config: configReducer,
  auth: authReducer,
  basket: basketReducer,
  voucherCode: voucherCodeReducer
});
