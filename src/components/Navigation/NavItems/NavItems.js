import React from 'react';

import NavItem from './NavItem/NavItem';

const navItemList = [
  { to: '/products/new', label: 'New' },
  { to: '/products/men', label: 'Men' },
  { to: '/products/women', label: 'Women' },
  { to: '/products/children', label: 'Children' },
  { to: '/products/offers', label: 'Offers' }
];

const NavItems = props => {
  const navItems = navItemList.map((item, index) => (
    <NavItem key={'navItem ' + index} to={item.to}>
      {item.label}
    </NavItem>
  ));

  return <React.Fragment>{navItems}</React.Fragment>;
};

export default NavItems;
