import * as actions from '../actions/';
import { authAxios } from '../../axios';
import { put, delay } from 'redux-saga/effects';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('tokenExpiration');
  yield put(actions.accountLogoutComplete());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expiresIn);
  yield put(actions.accountLogout());
}

export function* loginSaga(action) {
  yield put(actions.accountLogin());
  const loginData = {
    email: action.email,
    password: action.password
  };
  try {
    const response = yield authAxios.post('login', loginData);
    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn
    );
    yield localStorage.setItem('token', response.data.token);
    yield localStorage.setItem('tokenExpiration', expirationDate);
    yield put(
      actions.accountLoginSuccess(
        response.data.token,
        response.data.email,
        response.data.savedAddress
      )
    );
    yield put(actions.accountCheckAuthTimeout(response.data.expiresIn));
  } catch (error) {
    yield put(actions.accountLoginFail(error.response.data));
  }
}

export function* registerSaga(action) {
  yield put(actions.accountRegister());
  const registerData = {
    email: action.email,
    password: action.password
  };
  try {
    const response = yield authAxios.put('register', registerData);
    yield put(actions.accountRegisterSuccess(response.data));
  } catch (error) {
    yield put(actions.accountRegisterFail(error.response.data));
  }
}

export function* checkAuthStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.accountLogout());
  } else {
    try {
      const response = yield authAxios({
        method: 'post',
        url: 'autoLogin',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.data.exp >= Math.floor(new Date().getTime() / 1000)) {
        yield put(
          actions.accountLoginSuccess(
            token,
            response.data.email,
            response.data.savedAddress
          )
        );
        yield put(
          actions.accountCheckAuthTimeout(
            response.data.exp * 1000 - new Date().getTime()
          )
        );
      } else {
        yield put(actions.accountLogout());
      }
    } catch (error) {
      yield put(actions.accountLoginFail(error.response.data));
      yield put(actions.accountLogout());
    }
  }
}

export function* forgottenPasswordSaga(action) {
  const resetData = {
    email: action.email
  };
  try {
    yield authAxios.post('forgottenPassword', resetData);
    yield put(actions.accountForgottenPasswordRequestSent());
  } catch (error) {
    yield console.log(error);
  }
}

export function* resetPasswordSaga(action) {
  const resetData = {
    userId: action.userId,
    resetToken: action.resetToken,
    password: action.password
  };
  try {
    yield authAxios.put('/resetPassword', resetData);
    yield put(actions.accountForgottenPasswordRequestSent());
  } catch (error) {
    yield console.log(error.response.data);
  }
}
