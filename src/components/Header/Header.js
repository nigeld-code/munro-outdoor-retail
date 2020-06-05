import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';

import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={classes.Header}>
      <Navigation />
      <div className={classes.HeaderLogo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
