import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  email: null,
  savedAddress: null,
  error: null,
  registerSuccess: null
};

const accountLogin = (state, action) => {
  return {
    ...state,
    error: null
  };
};

const accountLoginSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    email: action.email,
    savedAddress:
      Object.keys(action.savedAddress).length === 0
        ? null
        : action.savedAddress,
    error: null
  };
};

const accountLoginFail = (state, action) => {
  return {
    ...state,
    token: null,
    email: null,
    savedAddress: null,
    error: action.error
  };
};

const accountRegister = (state, action) => {
  return {
    ...state,
    registerSuccess: null,
    error: null
  };
};

const accountRegisterSuccess = (state, action) => {
  return {
    ...state,
    registerSuccess: true
  };
};

const accountRegisterFail = (state, action) => {
  return {
    ...state,
    registerSuccess: false,
    error: action.error
  };
};

const accountLogoutComplete = (state, action) => {
  return {
    ...state,
    token: null,
    email: null,
    savedAddress: null
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACCOUNT_LOGIN:
      return accountLogin(state, action);
    case actionTypes.ACCOUNT_LOGIN_SUCCESS:
      return accountLoginSuccess(state, action);
    case actionTypes.ACCOUNT_LOGIN_FAIL:
      return accountLoginFail(state, action);
    case actionTypes.ACCOUNT_REGISTER:
      return accountRegister(state, action);
    case actionTypes.ACCOUNT_REGISTER_SUCCESS:
      return accountRegisterSuccess(state, action);
    case actionTypes.ACCOUNT_REGISTER_FAIL:
      return accountRegisterFail(state, action);
    case actionTypes.ACCOUNT_LOGOUT_COMPLETE:
      return accountLogoutComplete(state, action);
    default:
      return state;
  }
};

export default reducer;
