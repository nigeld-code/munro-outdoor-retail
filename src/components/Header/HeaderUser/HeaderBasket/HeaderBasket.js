import React from 'react';

import classes from './HeaderBasket.module.scss';

const HeaderBasket = props => {
  return (
    <div className={classes.HeaderBasket}>
      <i className='nld-shopping-basket'></i>
      <p>
        {props.basket ? `Basket` : `Basket is empty`}
        <span>{props.basket ? ` (${props.basket})` : null}</span>
        <span>{props.total ? ` ${props.total}` : null}</span>
      </p>
    </div>
  );
};

export default HeaderBasket;
