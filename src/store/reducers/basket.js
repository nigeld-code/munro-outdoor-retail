import * as actionTypes from '../actions/actionTypes';

const initialState = {
  basket: [],
  totalPrice: 0
};

const addToBasket = (state, action) => {
  const inBasketIndex = state.basket.findIndex(
    item => item.productSku === action.productSku
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
          qty: action.qty
        }
      ],
      totalPrice: state.totalPrice + action.price * action.qty
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return addToBasket(state, action);
    case actionTypes.CLEAR_BASKET:
      return {...initialState};
    default:
      return state;
  }
};

export default reducer;
