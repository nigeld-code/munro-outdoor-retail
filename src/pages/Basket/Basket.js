import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { clearBasket } from '../../store/actions/';

const Basket = () => {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();

  let basketDisplay = null;
  if (basket) {
    basketDisplay = JSON.stringify(basket);
  }

  const clearBasketHandler = () => {
    dispatch(clearBasket());
  };

  return (
    <React.Fragment>
      {basketDisplay}
      {basketDisplay ? <button onClick={clearBasketHandler}>Clear Basket</button> : null}
    </React.Fragment>
  );
};

export default Basket;