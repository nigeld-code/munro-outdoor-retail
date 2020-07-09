import * as actionTypes from './actionTypes';

export const initialBasket = () => {
  return {
    type: actionTypes.INITIAL_BASKET
  };
};

export const addToBasket = (productSku, qty, price, size, isInitial = false) => {
  return {
    type: actionTypes.ADD_TO_BASKET,
    productSku,
    qty,
    price,
    size,
    isInitial
  };
};

export const clearBasket = () => {
  return {
    type: actionTypes.CLEAR_BASKET
  };
};

export const changeBasketQty = (productSku, qty, price, size) => {
  return {
    type: actionTypes.CHANGE_BASKET_QTY,
    productSku,
    qty,
    price,
    size
  };
};

export const removeBasketSku = (productSku, price, size) => {
  return {
    type: actionTypes.REMOVE_BASKET_SKU,
    productSku,
    price,
    size
  };
};
