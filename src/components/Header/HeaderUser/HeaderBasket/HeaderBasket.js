import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './HeaderBasket.module.scss';

const HeaderBasket = () => {
  const basketQty = useSelector(state => {
    let basketQtyCount = 0;
    state.basket.basket.forEach(item => {
      basketQtyCount += item.qty;
    });
    return basketQtyCount;
  });

  const basketTotal = useSelector(state => state.basket.totalPrice);

  const history = useHistory();

  return (
    <div
      className={classes.HeaderBasket}
      onClick={() => history.push('/basket')}
    >
      <i className='nld-shopping-basket'></i>
      <p>
        {basketQty ? `Basket` : `Basket is empty`}
        <span>{basketQty ? ` (${basketQty})` : null}</span>
        <span>{basketTotal ? ` £${basketTotal}` : null}</span>
      </p>
    </div>
  );
};

export default HeaderBasket;
