import React from 'react';

import classes from './Overlay.module.scss';

const Overlay = props => {
  return <div className={classes.Overlay} onClick={props.clicked}></div>;
};

export default Overlay;
