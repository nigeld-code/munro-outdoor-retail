import React from 'react';

import Logo from '../UI/Logo/Logo';

import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Navigation />
      <div className={classes.HeaderLogo}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
