import * as actionTypes from '../actions/actionTypes';

const initialState = {
  basket: [],
  totalPrice: 0
};

const addToBasket = (state, action) => {
  const inBasketIndex = state.basket.findIndex(
    item =>
      item.productSku === action.productSku &&
      (!item.size || item.size === action.size)
  );
  if (inBasketIndex >= 0) {
    const updatedBasket = [...state.basket];
    updatedBasket[inBasketIndex] = {
      ...updatedBasket[inBasketIndex],
      qty: updatedBasket[inBasketIndex].qty + action.qty
    };
    return {
      ...state,
      basket: updatedBasket,
      totalPrice: state.totalPrice + action.price * action.qty
    };
  } else {
    return {
      ...state,
      basket: [
        ...state.basket,
        {
          productSku: action.productSku,
          size: action.size,
          qty: action.qty
        }
      ],
      totalPrice: state.totalPrice + action.price * action.qty
    };
  }
};

const changeBasketQty = (state, action) => {
  const inBasketIndex = state.basket.findIndex(
    item =>
      item.productSku === action.productSku &&
      (!item.size || item.size === action.size)
  );
  if (inBasketIndex >= 0) {
    const updatedTotalPrice =
      state.totalPrice +
      (action.qty - state.basket[inBasketIndex].qty) * action.price;
    const updatedBasket = [...state.basket];
    updatedBasket[inBasketIndex] = {
      ...updatedBasket[inBasketIndex],
      qty: action.qty
    };
    return {
      ...state,
      basket: updatedBasket,
      totalPrice: updatedTotalPrice
    };
  }
  return state;
};

const removeBasketSku = (state, action) => {
  const inBasketIndex = state.basket.findIndex(
    item =>
      item.productSku === action.productSku &&
      (!item.size || (item.size && action.size))
  );
  if (inBasketIndex >= 0) {
    const updatedTotalPrice =
      state.totalPrice - state.basket[inBasketIndex].qty * action.price;
    const updatedBasket = [...state.basket];
    updatedBasket.splice(inBasketIndex, 1);
    return {
      ...state,
      basket: updatedBasket,
      totalPrice: updatedTotalPrice
    };
  }
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return addToBasket(state, action);
    case actionTypes.CLEAR_BASKET:
      return { ...initialState };
    case actionTypes.CHANGE_BASKET_QTY:
      return changeBasketQty(state, action);
    case actionTypes.REMOVE_BASKET_SKU:
      return removeBasketSku(state, action);
    default:
      return state;
  }
};

export default reducer;
