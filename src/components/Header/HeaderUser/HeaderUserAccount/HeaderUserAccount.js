import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { accountLogout } from '../../../../store/actions';

import classes from './HeaderUserAccount.module.scss';

const HeaderUserAccount = () => {
  const history = useHistory();
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const [headerUserAccountText, setHeaderUserAccountText] = useState();

  useEffect(() => {
    setHeaderUserAccountText(() =>
      email ? (
        <React.Fragment>
          <span title={email} onClick={() => history.push('/account')}>
            My Account{' '}
          </span>
          <span
            className={classes.HeaderUserAccountButton}
            onClick={() => dispatch(accountLogout())}
          >
            Logout
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span onClick={() => history.push('/account')}>
            Account{' '}
            <span className={classes.HeaderUserAccountButton}>
              Login/Register
            </span>
          </span>
        </React.Fragment>
      )
    );
  }, [email, dispatch, history]);

  return (
    <div className={classes.HeaderUserAccount}>{headerUserAccountText}</div>
  );
};

export default HeaderUserAccount;
