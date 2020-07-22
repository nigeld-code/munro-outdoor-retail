import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { accountAuthLogin } from '../../../store/actions/auth';
import * as Yup from 'yup';

import classes from '../Account.module.scss';

const Login = props => {
  const dispatch = useDispatch();

  const authError = useSelector(state => state.auth.error);

  const accountLoginFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('*please enter a valid email')
        .required('*required'),
      password: Yup.string().required('*required')
    }),
    onSubmit: values => {
      dispatch(accountAuthLogin(values.email, values.password));
    }
  });

  return (
    <React.Fragment>
      <form onSubmit={accountLoginFormik.handleSubmit} noValidate>
        <h1>Account Login</h1>
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='email'>Email: </label>
          <input
            className={
              accountLoginFormik.touched.email &&
              accountLoginFormik.errors.email
                ? classes.AccountLoginErrorInput
                : null
            }
            name='email'
            type='email'
            {...accountLoginFormik.getFieldProps('email')}
          />
        </div>
        {accountLoginFormik.touched.email && accountLoginFormik.errors.email ? (
          <div className={classes.AccountLoginErrorText}>
            {accountLoginFormik.errors.email}
          </div>
        ) : null}
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='password'>Password: </label>
          <input
            className={
              accountLoginFormik.touched.password &&
              accountLoginFormik.errors.password
                ? classes.AccountLoginErrorInput
                : null
            }
            name='password'
            type='password'
            {...accountLoginFormik.getFieldProps('password')}
          />
        </div>
        {accountLoginFormik.touched.password &&
        accountLoginFormik.errors.password ? (
          <div className={classes.AccountLoginErrorText}>
            {accountLoginFormik.errors.password}
          </div>
        ) : null}
        <div className={classes.AccountLoginForgottenPassword}>
          <button
            type='button'
            onClick={event =>
              props.accountFormButtonHandler(event, 'forgottenPassword')
            }
          >
            Forgotten your password?
          </button>
        </div>
        {authError && authError.message ? (
          <div
            className={classes.AccountLoginErrorText}
            style={{ marginTop: '0.5rem' }}
          >
            *{authError.message}
          </div>
        ) : null}
        <button type='submit'>Login</button>
        <div className={classes.AccountLoginOr}>
          <span>Or</span>
        </div>
      </form>
      <div className={classes.AccountLoginRegisterSwitch}>
        <button
          onClick={event => props.accountFormButtonHandler(event, 'register')}
        >
          Register an Account
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
