import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { clearBasket } from '../../store/actions/';

import BasketProduct from '../../components/BasketProduct/BasketProduct';
import classes from './Basket.module.scss';

const Basket = () => {
  const basket = useSelector(state => state.basket.basket);
  const dispatch = useDispatch();

  let basketDisplay = null;
  if (basket) {
    basketDisplay = basket.map(item => {
      return (
        <BasketProduct
          key={item.productSku + item.size}
          sku={item.productSku}
          size={item.size}
          qty={item.qty}
        />
      );
    });
  }

  const clearBasketHandler = () => {
    dispatch(clearBasket());
  };

  return (
    <React.Fragment>
      <div className={classes.Basket_BasketDisplay}>{basketDisplay}</div>
      {basketDisplay ? (
        <button onClick={clearBasketHandler}>Clear Basket</button>
      ) : null}
    </React.Fragment>
  );
};

export default Basket;
