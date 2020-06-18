import React from 'react';

import HeaderUserAccount from './HeaderUserAccount/HeaderUserAccount';
import HeaderBasket from './HeaderBasket/HeaderBasket';

import classes from './HeaderUserAndCart.module.scss';

const HeaderUserAndCart = () => {
  return (
    <div className={classes.HeaderUserAndCart}>
      <HeaderUserAccount />
      <HeaderBasket basket='2' total='£2.00' />
    </div>
  );
};

export default HeaderUserAndCart;
