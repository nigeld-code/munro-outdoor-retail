import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { accountCheckAuthState } from './store/actions/';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Account from './pages/Account/Account';

const App = ({ location }) => {
  const dispatch = useDispatch();
  const { pathname } = location;

  useEffect(() => {
    dispatch(accountCheckAuthState());
  }, [dispatch]);

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <Layout>
      <Switch>
        <Route
          path='/product/:sku'
          component={props => <Product {...props} />}
        />
        <Route
          path='/products/:category/:selection'
          component={props => <Products {...props} />}
        />
        <Route
          path='/products/:category'
          component={props => <Products {...props} />}
        />
        <Route
          path='/account'
          exact
          component={props => <Account {...props} />}
        />
        <Route
          path='/passwordReset/:userId/:resetToken'
          component={props => <Account isReset {...props} />}
        />
        <Route path='/' exact component={props => <Home {...props} />} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
