import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  accountCheckAuthState,
  initialBasket,
  showModal
} from './store/actions/';

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
    dispatch(
      showModal({
        title: 'Welcome to Munro Outdoor Retail',
        main: [
          { h3: ' *** This is a mock website *** ' },
          {
            text:
              'Please take a look around my first website made with ReactJS. I really enjoyed the challenge of making it.'
          },
          { text: 'This site has the following features:' },
          {
            points: [
              'Mobile and Desktop friendly',
              'Accounts with auth and password reset by email',
              'Accounts show order history and can save delivery details',
              'Shopping basket and checkout',
              'Product filtering, by brand and category',
              'Product search by product tag',
              'Product management (add, remove, edit) on BackEnd site including Image upload',
              'Order confirmation sent by email',
              'Discount codes, supporting manual entry and auto discounts depending on whats in the basket',
              'Dynamic Modal - like this',
              'And more...'
            ]
          },
          { hr: true },
          {
            text: 'This site uses the following technologies'
          },
          {
            text: 'Frontend:'
          },
          {
            points: [
              'ReactJS with Hooks',
              'React Router',
              'Redux and ReduxSaga',
              'Custom React hooks',
              'Custom React multi-use Components',
              'Scss',
              'Axios',
              'Formik with Yup'
            ]
          },
          {
            text: 'BackEnd:'
          },
          {
            points: [
              'NodeJS with ExpressJS (& express-sessions and express-validator)',
              'RESTful Routes',
              'MongoDB and MongooseJS',
              'AWS SDK - AWS-SES',
              'bcryptJS',
              'Ejs',
              'Web Components',
              'JsonWebToken',
              'Multer with Sharp for Image upload',
              'uudiv4',
              'dotenv'
            ]
          },
          {
            hr: true
          },
          {
            text:
              'Thanks for checking out my site. To see the code please visit my Github - nigeld-code'
          }
        ]
      })
    );
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
