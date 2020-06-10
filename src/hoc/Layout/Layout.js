import React from 'react';

import useScreenSize from '../../hooks/useScreenSize';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.module.scss';

const Layout = props => {
  useScreenSize();
  return (
    <React.Fragment>
      <Header />
      <main className={classes.Main}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
