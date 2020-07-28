import * as actionTypes from './actionTypes';

export const checkVoucherCode = (code, currentCodes, basket) => {
  return {
    type: actionTypes.CHECK_VOUCHER_CODE,
    code,
    currentCodes,
    basket
  };
};

export const checkAutoVoucherCodes = (currentCodes, basket) => {
  return {
    type: actionTypes.CHECK_AUTO_VOUCHER_CODES,
    currentCodes,
    basket
  };
};

export const acceptVoucherCode = (code, discount, message) => {
  return {
    type: actionTypes.ACCEPT_VOUCHER_CODE,
    code,
    discount,
    message
  };
};

export const rejectVoucherCode = message => {
  return {
    type: actionTypes.REJECT_VOUCHER_CODE,
    message
  };
};

export const removeVoucherCode = code => {
  return {
    type: actionTypes.REMOVE_VOUCHER_CODE,
    code
  };
};

export const removeAllVoucherCodes = () => {
  return {
    type: actionTypes.REMOVE_ALL_VOUCHER_CODES
  };
};
