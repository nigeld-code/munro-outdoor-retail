import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {
  checkAuthTimeoutSaga,
  loginSaga,
  logoutSaga,
  forgottenPasswordSaga,
  resetPasswordSaga,
  registerSaga,
  checkAuthStateSaga
} from './auth';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.ACCOUNT_CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.ACCOUNT_LOGOUT, logoutSaga),
    takeEvery(actionTypes.ACCOUNT_AUTH_LOGIN, loginSaga),
    takeEvery(actionTypes.ACCOUNT_AUTH_REGISTER, registerSaga),
    takeEvery(actionTypes.ACCOUNT_FORGOTTEN_PASSWORD, forgottenPasswordSaga),
    takeEvery(actionTypes.ACCOUNT_RESET_PASSWORD, resetPasswordSaga),
    takeEvery(actionTypes.ACCOUNT_CHECK_STATE, checkAuthStateSaga)
  ]);
}