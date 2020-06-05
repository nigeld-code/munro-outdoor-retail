import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import useScreenSize from './hooks/useScreenSize';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  useScreenSize();

  return (
    <Layout>
      <Switch>
        <Route path='/new' exact />
        <Route path='/men' exact />
        <Route path='/women' exact />
        <Route path='/children' exact />
        <Route path='/offers' exact />
        <Route path='/' exact component={props => <Home {...props} />} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default withRouter(App);
