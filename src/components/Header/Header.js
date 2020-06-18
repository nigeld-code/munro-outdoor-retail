import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../UI/Logo/Logo';
import HeaderUser from './HeaderUser/HeaderUserAndCart';

import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const screenSize = useSelector(state => state.config.screenSize);

  const search = (
    <div className={classes.HeaderSearch}>
      <input type='text' placeholder='Search...' />
      <button>
        <i className='nld-search'></i>
      </button>
    </div>
  );

  const logo = (
    <div className={classes.HeaderLogo}>
      <Link to='/'>
        <Logo />
      </Link>
    </div>
  );

  const headerLayoutData = {
    small: (
      <React.Fragment>
        <div className={classes.HeaderRow}>
          <div className={classes.HeaderRow}>
            <Navigation />
            {logo}
          </div>
          <HeaderUser />
        </div>
        {search}
      </React.Fragment>
    ),
    medium: (
      <React.Fragment>
        <div className={classes.HeaderRow}>
          {logo}
          <HeaderUser />
        </div>
        {search}
        <div className={classes.HeaderNav}>
          <Navigation />
        </div>
      </React.Fragment>
    ),
    large: (
      <React.Fragment>
        <div className={classes.HeaderRow}>
          {logo}
          {search}
          <HeaderUser />
        </div>
        <div className={classes.HeaderNav}>
          <Navigation />
        </div>
      </React.Fragment>
    )
  };

  const headerLayout = useMemo(() => {
    let layoutSize;
    if (screenSize < 3) {
      layoutSize = 'small';
    } else if (screenSize === 3) {
      layoutSize = 'medium';
    } else if (screenSize > 3) {
      layoutSize = 'large';
    }
    return headerLayoutData[layoutSize];
  }, [screenSize, headerLayoutData]);

  return <header>{headerLayout}</header>;
};

export default Header;
