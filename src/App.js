import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { accountCheckAuthState, initialBasket } from './store/actions/';

import Modal from './components/UI/Modal/Modal';
import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Basket from './pages/Basket/Basket';
import Account from './pages/Account/Account';
import Checkout from './pages/Checkout/Checkout';

const App = ({ location }) => {
  const dispatch = useDispatch();
  const { pathname } = location;

  useEffect(() => {
    dispatch(accountCheckAuthState());
    dispatch(initialBasket());
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
    <React.Fragment>
      <Modal />
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
            path='/basket'
            exact
            component={props => <Basket {...props} />}
          />
          <Route
            path='/checkout'
            exact
            component={props => <Checkout {...props} />}
          />
          <Route
            path='/passwordReset/:userId/:resetToken'
            component={props => <Account isReset {...props} />}
          />
          <Route path='/' exact component={props => <Home {...props} />} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(App);
