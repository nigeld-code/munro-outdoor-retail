import React from 'react';

import NavItem from './NavItem/NavItem';

const navItemList = [
  { to: '/products/_/new', label: 'New' },
  { to: '/products/5efdd1a1eb021732f01c125f', label: 'Men' },
  { to: '/products/5efdd1a5eb021732f01c1260', label: 'Women' },
  { to: '/products/5efdd1afeb021732f01c1261', label: 'Children' },
  { to: '/products/5efdd1c4eb021732f01c1262', label: 'Equipment' },
  { to: '/products/5efdd1cceb021732f01c1263', label: 'Camping' }
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
