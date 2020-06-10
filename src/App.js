import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

const App = ({ location }) => {
  const { pathname } = location;
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
        <Route path='/products' component={props => <Products {...props} />} />
        <Route path='/' exact component={props => <Home {...props} />} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
