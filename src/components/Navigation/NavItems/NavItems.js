import React from 'react';

import NavItem from './NavItem/NavItem';

const navItemList = [
  { to: '/products/_/new', label: 'New' },
  { to: '/products/_/men', label: 'Men' },
  { to: '/products/_/women', label: 'Women' },
  { to: '/products/_/children', label: 'Children' },
  { to: '/products/_/Equipment', label: 'Equipment' },
  { to: '/products/_/Camping', label: 'Camping' }
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
