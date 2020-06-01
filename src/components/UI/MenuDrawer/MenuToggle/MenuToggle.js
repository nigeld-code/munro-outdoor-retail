import React from 'react';

import classes from './MenuToggle.module.scss';

const MenuToggle = props => {
  return (
    <button className={classes.MenuToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default MenuToggle;