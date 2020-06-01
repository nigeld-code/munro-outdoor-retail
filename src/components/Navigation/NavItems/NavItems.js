import React from 'react';

import NavItem from './NavItem/NavItem';

const navItemList = [
  { to: '/new', label: 'New' },
  { to: '/men', label: 'Men' },
  { to: '/women', label: 'Women' },
  { to: '/children', label: 'Children' },
  { to: '/offers', label: 'Offers' }
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
