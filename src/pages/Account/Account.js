import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ForgotterPassword from './ForgottenPassword/ForgottenPassword';
import Register from './Register/Register';
import Login from './Login/Login';
import ResetPassword from './ResetPassword/ResetPassword';

import classes from './Account.module.scss';

const Account = props => {
  const userEmail = useSelector(state => state.auth.email);
  const [accountFormType, setAccountFormType] = useState('login');
  const { userId, resetToken } = useParams();
  let accountFormDisplay;

  const accountFormOrButtonHandler = (event, formType) => {
    setAccountFormType(formType);
    event.target.blur();
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
            
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default React.memo(Account);
