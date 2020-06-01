import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MenuToggle from '../UI/MenuDrawer/MenuToggle/MenuToggle';
import MenuDrawer from '../UI/MenuDrawer/MenuDrawer';
import NavItems from './NavItems/NavItems';

import classes from './Navigation.module.scss';

const Navigation = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  const menuToggleClickHandler = props => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  };

  const navItemsForMenuDrawer = (
    <ul
      className={[
        classes.NavigationNavItems,
        classes.NavigationNavItemsMenuDrawer
      ].join(' ')}
    >
      <NavItems />
    </ul>
  );

  return (
    <nav>
      <MenuToggle clicked={menuToggleClickHandler} />
      <MenuDrawer isOpen={isMenuDrawerOpen} clicked={menuToggleClickHandler}>
        {navItemsForMenuDrawer}
      </MenuDrawer>
      <ul className={[classes.NavigationNavItems, classes.Navbar].join(' ')}>
        <NavItems />
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
