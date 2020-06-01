import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <Link to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
