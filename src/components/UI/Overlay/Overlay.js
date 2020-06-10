import React from 'react';

import classes from './Overlay.module.scss';

const Overlay = props => {
  const { showOverlay, clicked } = props;

  const overlayClass = [classes.Overlay, showOverlay ? null : classes.Hide];

  return <div className={overlayClass.join(' ')} onClick={clicked}></div>;
};

export default React.memo(Overlay);
