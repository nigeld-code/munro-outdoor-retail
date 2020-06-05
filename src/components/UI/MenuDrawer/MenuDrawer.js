import React, { useEffect, useRef } from 'react';

import useTouchSwipe from '../../../hooks/useTouchSwipe';

import Overlay from '../../UI/Overlay/Overlay';

import classes from './MenuDrawer.module.scss';

const MenuDrawer = props => {
  const { close } = props;
  const touchSwipeRespond = useTouchSwipe();
  const drawerRef = useRef();

  useEffect(() => {
    touchSwipeRespond(
      drawerRef,
      { left: () => close() },
      { isPreventDefault: false }
    );
  }, [touchSwipeRespond, close]);

  let classList = [classes.MenuDrawer, classes.Close];
  if (props.isOpen) {
    classList = [classes.MenuDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      {props.isOpen && <Overlay showOverlay={props.isOpen} clicked={close} />}
      <div ref={drawerRef} className={classList.join(' ')}>
        <div className={classes.CloseMenuDrawer} onClick={close}>
          X
        </div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default MenuDrawer;
