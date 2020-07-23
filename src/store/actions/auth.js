import * as actionTypes from './actionTypes';

export const accountAuthLogin = (email, password) => {
  return {
    type: actionTypes.ACCOUNT_AUTH_LOGIN,
    email,
    password
  };
};

export const accountLogin = () => {
  return {
    type: actionTypes.ACCOUNT_LOGIN
  };
};

export const accountLoginSuccess = (token, email, savedAddress) => {
  return {
    type: actionTypes.ACCOUNT_LOGIN_SUCCESS,
    token,
    email,
    savedAddress
  };
};

export const accountLoginFail = error => {
  return {
    type: actionTypes.ACCOUNT_LOGIN_FAIL,
    error
  };
};

export const accountLogout = () => {
  return {
    type: actionTypes.ACCOUNT_LOGOUT
  };
};

export const accountLogoutComplete = () => {
  return {
    type: actionTypes.ACCOUNT_LOGOUT_COMPLETE
  };
};

export const accountForgottenPassword = email => {
  return {
    type: actionTypes.ACCOUNT_FORGOTTEN_PASSWORD,
    email
  };
};

export const accountForgottenPasswordRequestSent = () => {
  return {
    type: actionTypes.ACCOUNT_FORGOTTEN_PASSWORD_REQUEST_SENT
  };
};

export const accountResetPassword = (userId, resetToken, password) => {
  return {
    type: actionTypes.ACCOUNT_RESET_PASSWORD,
    userId,
    resetToken,
    password
  };
};

export const accountResetPasswordRequestSent = () => {
  return {
    type: actionTypes.ACCOUNT_RESET_PASSWORD_REQUEST_SENT
  };
};

export const accountAuthRegister = (email, password) => {
  return {
    type: actionTypes.ACCOUNT_AUTH_REGISTER,
    email,
    password
  };
};

export const accountRegister = () => {
  return {
    type: actionTypes.ACCOUNT_REGISTER
  };
};

export const accountRegisterSuccess = data => {
  return {
    type: actionTypes.ACCOUNT_REGISTER_SUCCESS,
    data
  };
};

export const accountRegisterFail = error => {
  return {
    type: actionTypes.ACCOUNT_REGISTER_FAIL,
    error
  };
};

export const accountCheckAuthState = () => {
  return {
    type: actionTypes.ACCOUNT_CHECK_STATE
  };
};

export const accountCheckAuthTimeout = expiresIn => {
  return {
    type: actionTypes.ACCOUNT_CHECK_AUTH_TIMEOUT,
    expiresIn
  };
};

export const accountUpdateSavedAddress = (name, address, city, postcode) => {
  return {
    type: actionTypes.ACCOUNT_UPDATE_SAVED_ADDRESS,
    name,
    address,
    city,
    postcode
  };
};
