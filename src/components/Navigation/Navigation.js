import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MenuToggle from '../UI/MenuDrawer/MenuToggle/MenuToggle';
import MenuDrawer from '../UI/MenuDrawer/MenuDrawer';
import NavItems from './NavItems/NavItems';

import classes from './Navigation.module.scss';

const Navigation = props => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const screenSize = useSelector(state => state.config.screenSize);
  const location = useLocation();

  const menuToggleClickHandler = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  };

  useEffect(() => {
    setIsMenuDrawerOpen(false);
  }, [location]);

  let nav = (
    <ul className={[classes.NavigationNavItems, classes.Navbar].join(' ')}>
      <NavItems />
    </ul>
  );
  if (screenSize <= 2) {
    nav = (
      <React.Fragment>
        <MenuToggle clicked={menuToggleClickHandler} />
        <MenuDrawer
          isOpen={isMenuDrawerOpen && screenSize <= 2}
          close={menuToggleClickHandler}
        >
          <ul
            className={[
              classes.NavigationNavItems,
              classes.NavigationNavItemsMenuDrawer
            ].join(' ')}
          >
            <NavItems />
          </ul>
        </MenuDrawer>
      </React.Fragment>
    );
  } else {
    isMenuDrawerOpen && setIsMenuDrawerOpen(false);
  }

  return <nav>{nav}</nav>;
};

export default Navigation;
