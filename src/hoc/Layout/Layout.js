import React from 'react';

import Header from '../../components/Header/Header';

import classes from './Layout.module.scss';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.Main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
