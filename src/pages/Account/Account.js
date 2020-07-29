import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import useFetchOrdersData from '../../hooks/useFetchOrdersData';

import { showModal } from '../../store/actions/';

import ForgotterPassword from './ForgottenPassword/ForgottenPassword';
import Register from './Register/Register';
import Login from './Login/Login';
import ResetPassword from './ResetPassword/ResetPassword';

import classes from './Account.module.scss';

const Account = props => {
  const userEmail = useSelector(state => state.auth.email);
  const [accountFormType, setAccountFormType] = useState('login');
  const { userId, resetToken } = useParams();
  const { orders, errorMsg } = useFetchOrdersData();
  const dispatch = useDispatch();

  let accountFormDisplay;

  const accountFormOrButtonHandler = (event, formType) => {
    setAccountFormType(formType);
    event.target.blur();
  };

  const showOrder = order => {
    dispatch(
      showModal({
        order
      })
    );
  };

  if (accountFormType === 'login') {
    accountFormDisplay = (
      <Login accountFormButtonHandler={accountFormOrButtonHandler} />
    );
  } else if (accountFormType === 'forgottenPassword') {
    accountFormDisplay = (
      <ForgotterPassword
        accountFormButtonHandler={accountFormOrButtonHandler}
      />
    );
  } else if (accountFormType === 'register') {
    accountFormDisplay = (
      <Register accountFormButtonHandler={accountFormOrButtonHandler} />
    );
  }

  if (props.isReset) {
    accountFormDisplay = (
      <ResetPassword userId={userId} resetToken={resetToken} />
    );
  }

  return (
    <React.Fragment>
      {!userEmail ? (
        <div className={classes.AccountLogin}>{accountFormDisplay}</div>
      ) : (
        <div className={classes.Account_Home}>
          <div className={classes.Account_Home_Welcome}>Hi {userEmail}</div>
          <div className={classes.Account_Home_Orders}>
            <h3>Your Orders:</h3>
            {orders.length ? (
              orders.map(order => {
                const createdAt = new Date(order.createdAt);
                return (
                  <div key={order._id}>
                    <span>
                      Order Ref:
                      <br />
                      <small>{order._id}</small>
                    </span>
                    <div className={classes.Account_Home_Orders_DeliveryType}>
                      {order.delivery.isDelivery
                        ? 'Delivery'
                        : 'Click & Collect'}
                    </div>
                    <div className={classes.Account_Home_Orders_DateCost}>
                      <div style={{ width: '9ch' }}>
                        <small>Ordered on:</small>{' '}
                        {`${createdAt.getDate()}/${
                          createdAt.getMonth() + 1
                        }/${createdAt.getFullYear().toString().substr(-2)}`}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexFlow: 'row wrap',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          paddingTop: '0.2rem'
                        }}
                      >
                        <small>Total: </small> £
                        {order.totals.totalToPay.toFixed(2)}
                      </div>
                    </div>
                    <button onClick={() => showOrder(order)}>View</button>
                  </div>
                );
              })
            ) : errorMsg ? (
              <div>{errorMsg}</div>
            ) : null}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Account);
