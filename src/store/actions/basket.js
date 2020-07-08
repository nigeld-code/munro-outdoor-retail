import * as actionTypes from './actionTypes';

export const initialBasket = () => {
  return {
    type: actionTypes.INITIAL_BASKET
  };
};

export const addToBasket = (productSku, qty, price, isInitial = false) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    productSku,
    qty,
    price,
    isInitial
  };
};

export const clearBasket = () => {
  return {
    type: actionTypes.CLEAR_BASKET
  };
};
