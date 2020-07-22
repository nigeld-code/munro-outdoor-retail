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

import {
  initialBasketSaga,
  addToBasketSaga,
  clearBasketSaga,
  changeBasketQtySaga,
  removeBasketSkuSaga
} from './basket';

import { checkVoucherCodeSaga, checkAutoVoucherCodesSaga } from './voucherCode';

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

export function* watchBasket() {
  yield all([
    takeEvery(actionTypes.INITIAL_BASKET, initialBasketSaga),
    takeEvery(actionTypes.ADD_TO_BASKET, addToBasketSaga),
    takeEvery(actionTypes.CLEAR_BASKET, clearBasketSaga),
    takeEvery(actionTypes.CHANGE_BASKET_QTY, changeBasketQtySaga),
    takeEvery(actionTypes.REMOVE_BASKET_SKU, removeBasketSkuSaga)
  ]);
}

export function* watchVoucherCode() {
  yield all([
    takeEvery(actionTypes.CHECK_VOUCHER_CODE, checkVoucherCodeSaga),
    takeEvery(actionTypes.CHECK_AUTO_VOUCHER_CODES, checkAutoVoucherCodesSaga)
  ]);
}
