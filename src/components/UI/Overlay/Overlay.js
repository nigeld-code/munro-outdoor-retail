import React from 'react';

import classes from './Overlay.module.scss';

const Overlay = props => {
  const overlayClass = [
    classes.Overlay,
    props.showOverlay ? null : classes.Hide
  ];

  return <div className={overlayClass.join(' ')} onClick={props.clicked}></div>;
};

export default React.memo(Overlay);
