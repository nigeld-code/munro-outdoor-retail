import * as actionTypes from '../actions/actionTypes';

const initialState = {
  codes: [],
  discounts: [],
  message: {}
};

const acceptVoucherCode = (state, action) => {
  return {
    ...state,
    codes: [...state.codes, action.code],
    discounts: [...state.discounts, action.discount],
    message: action.message
  };
};

const rejectVoucherCode = (state, action) => {
  return {
    ...state,
    message: action.message
  };
};

const removeVoucherCode = (state, action) => {
  const indexOfCodeToRemove = state.codes.findIndex(
    code => code === action.code
  );
  if (indexOfCodeToRemove !== -1) {
    return {
      ...state,
      codes: state.codes.filter((_, index) => indexOfCodeToRemove !== index),
      discounts: state.discounts.filter(
        (_, index) => indexOfCodeToRemove !== index
      ),
      message: {}
    };
  } else {
    return state;
  }
};

const clearAllVoucherCodes = (state, action) => {
  return {
    codes: [],
    discounts: [],
    message: {}
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ACCEPT_VOUCHER_CODE:
      return acceptVoucherCode(state, action);
    case actionTypes.REJECT_VOUCHER_CODE:
      return rejectVoucherCode(state, action);
    case actionTypes.REMOVE_VOUCHER_CODE:
      return removeVoucherCode(state, action);
    case actionTypes.REMOVE_ALL_VOUCHER_CODES:
      return clearAllVoucherCodes(state, action);
    default:
      return state;
  }
};

export default reducer;
