import React from 'react';

import Overlay from '../../UI/Overlay/Overlay';

import classes from './MenuDrawer.module.scss';

const MenuDrawer = props => {
  let classList = [classes.MenuDrawer, classes.Close];
  if (props.isOpen) {
    classList = [classes.MenuDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      {props.isOpen && <Overlay clicked={props.clicked} />}
  <div className={classList.join(' ')}>{props.children}</div>
    </React.Fragment>
  );
};

export default MenuDrawer;
