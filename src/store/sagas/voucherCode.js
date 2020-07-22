import * as actions from '../actions/';
import { voucherCodeAxios } from '../../axios';
import { put } from 'redux-saga/effects';

export function* checkVoucherCodeSaga(action) {
  const token = yield localStorage.getItem('token');
  try {
    const axiosOptions = {
      method: 'post',
      url: 'checkCode',
      data: {
        code: action.code,
        currentCodes: action.currentCodes,
        basket: action.basket
      }
    };
    if (token) {
      axiosOptions.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    const response = yield voucherCodeAxios(axiosOptions);
    if (response.data.acceptCode) {
      yield put(
        actions.acceptVoucherCode(
          action.code,
          response.data.discount,
          response.data.message
        )
      );
    } else {
      yield put(actions.rejectVoucherCode(response.data.message));
    }
  } catch (err) {
    yield console.log(err);
    yield put(
      actions.rejectVoucherCode({
        isAccepted: false,
        msg: 'Network Error. Failed to check voucher code please try again'
      })
    );
  }
}

export function* checkAutoVoucherCodesSaga(action) {
  const token = yield localStorage.getItem('token');
  try {
    const axiosOptions = {
      method: 'post',
      url: 'autoCheckCodes',
      data: {
        currentCodes: action.currentCodes,
        basket: action.basket
      }
    };
    if (token) {
      axiosOptions.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    const response = yield voucherCodeAxios(axiosOptions);
    for (let i = 0; i < response.data.autoCodes.length; i++) {
      yield put(
        actions.acceptVoucherCode(
          response.data.autoCodes[i],
          response.data.autoDiscounts[i],
          { isAccepted: true, msg: null }
        )
      );
    }
    for (let j = 0; j < response.data.removeCodes.length; j++) {
      yield put(actions.removeVoucherCode(response.data.removeCodes[j]));
    }
  } catch (err) {
    yield console.log(err);
    yield put(
      actions.rejectVoucherCode({
        isAccepted: false,
        msg:
          'Network Error. Failed to check for auto discounts please refresh page'
      })
    );
  }
}
