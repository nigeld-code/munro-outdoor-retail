import React from 'react';

import HeaderUserAccount from './HeaderUserAccount/HeaderUserAccount';
import HeaderBasket from './HeaderBasket/HeaderBasket';

import classes from './HeaderUserAndCart.module.scss';

const HeaderUserAndCart = () => {
  return (
    <div className={classes.HeaderUserAndCart}>
      <HeaderUserAccount />
      <HeaderBasket />
    </div>
  );
};

export default HeaderUserAndCart;
