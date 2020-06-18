import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { accountForgottenPassword } from '../../../store/actions';

import classes from '../Account.module.scss';

const ForgottenPassword = props => {
  const dispatch = useDispatch();

  const accountForgottenPasswordFormik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('*please enter a valid email')
        .required('*required')
    }),
    onSubmit: values => {
      dispatch(accountForgottenPassword(values.email));
    }
  });

  return (
    <React.Fragment>
      <form onSubmit={accountForgottenPasswordFormik.handleSubmit} noValidate>
        <h1>Forgotten Password</h1>
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='email'>Email: </label>
          <input
            className={
              accountForgottenPasswordFormik.touched.email &&
              accountForgottenPasswordFormik.errors.email
                ? classes.AccountLoginErrorInput
                : null
            }
            name='email'
            type='email'
            {...accountForgottenPasswordFormik.getFieldProps('email')}
          />
        </div>
        {accountForgottenPasswordFormik.touched.email &&
        accountForgottenPasswordFormik.errors.email ? (
          <div className={classes.AccountLoginErrorText}>
            {accountForgottenPasswordFormik.errors.email}
          </div>
        ) : null}
        <button type='submit'>Retrieve password</button>
        <div className={classes.AccountLoginOr}>
          <span>Or</span>
        </div>
      </form>
      <div className={classes.AccountLoginRegisterSwitch}>
        <button
          onClick={event => props.accountFormButtonHandler(event, 'login')}
        >
          Account Login
        </button>
      </div>
    </React.Fragment>
  );
};

export default ForgottenPassword;
