import React from 'react';

import Logo from '../../../components/UI/Logo/Logo';

import classes from './productsTopBanner.module.scss';

const productsTopBanner = {
  className: classes.FirstOrderBanner,
  contents: [
    {
      text: (
        <div className={classes.FirstOrderBannerContainer}>
          <Logo
            className={classes.FirstOrderBannerLogo}
            textColor='#f6f6f6'
            lineColor='f6f6f6'
          />
          <div className={classes.FirstOrderBannerText}>
            <p>
              <strong>£15 OFF</strong>
              <em> your First Order of £50 or more</em>
              <br />
              <strong>Online Exclusive</strong>
            </p>
          </div>
        </div>
      )
    }
  ]
};

export default productsTopBanner;
