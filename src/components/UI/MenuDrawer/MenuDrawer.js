import React from 'react';

import Overlay from '../../UI/Overlay/Overlay';

import classes from './MenuDrawer.module.scss';
import SwipeEvent from '../../../hoc/TouchEvents/SwipeEvent';

const MenuDrawer = props => {
  const { close } = props;

  let classList = [classes.MenuDrawer, classes.Close];
  if (props.isOpen) {
    classList = [classes.MenuDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      {props.isOpen && <Overlay showOverlay={props.isOpen} clicked={close} />}
      <SwipeEvent swipeDistance={10} left={close}>
        <div className={classList.join(' ')}>
          <div className={classes.CloseMenuDrawer} onClick={close}>
            X
          </div>
          {props.children}
        </div>
      </SwipeEvent>
    </React.Fragment>
  );
};

export default MenuDrawer;
