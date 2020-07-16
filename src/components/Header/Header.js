import React, { useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../UI/Logo/Logo';
import HeaderUser from './HeaderUser/HeaderUserAndCart';

import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const screenSize = useSelector(state => state.config.screenSize);

  const [searchString, setSearchString] = useState('');

  const history = useHistory();

  const searchInputHandler = event => {
    setSearchString(event.target.value.toLowerCase());
  };

  const searchHandler = event => {
    event.preventDefault();
    if (searchString !== '') {
      const searchSplitJoin = searchString.split(' ').join('&');
      history.replace('/');
      history.push(`products/_/${searchSplitJoin}`);
    }
  };

  const search = (
    <form className={classes.HeaderSearch} onSubmit={searchHandler}>
      <label
        htmlFor='search'
        style={{
          clip: 'rect(0 0 0 0)',
          height: '1px',
          width: '1px',
          margin: '-1px',
          overflow: 'hidden'
        }}
      >
        Search
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search...'
        value={searchString}
        onChange={searchInputHandler}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            event.target.blur();
          }
        }}
      />
      <button>
        <i className='nld-search'></i>
      </button>
    </form>
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
