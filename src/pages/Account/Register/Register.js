import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { accountAuthRegister } from '../../../store/actions/';

import classes from '../Account.module.scss';

const Register = props => {
  const dispatch = useDispatch();
  const accountRegisterFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordCheck: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('*please enter a valid email')
        .required('*required'),
      password: Yup.string()
        .min(8, '*must be between 8 and 20 characters')
        .max(20, '*must be between 8 and 20 characters')
        .required('*required'),
      passwordCheck: Yup.string()
        .oneOf([Yup.ref('password')], '*passwords must match')
        .required('*required')
    }),
    onSubmit: values => {
      dispatch(accountAuthRegister(values.email, values.password));
    }
  });

  return (
    <React.Fragment>
      <form onSubmit={accountRegisterFormik.handleSubmit} noValidate>
        <h1>Register an Account</h1>
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='email'>Email: </label>
          <input
            className={
              accountRegisterFormik.touched.email &&
              accountRegisterFormik.errors.email
                ? classes.AccountLoginErrorInput
                : null
            }
            name='email'
            type='email'
            {...accountRegisterFormik.getFieldProps('email')}
          />
        </div>
        {accountRegisterFormik.touched.email &&
        accountRegisterFormik.errors.email ? (
          <div className={classes.AccountLoginErrorText}>
            {accountRegisterFormik.errors.email}
          </div>
        ) : null}
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='password'>Password: </label>
          <input
            className={
              accountRegisterFormik.touched.password &&
              accountRegisterFormik.errors.password
                ? classes.AccountLoginErrorInput
                : null
            }
            name='password'
            type='password'
            {...accountRegisterFormik.getFieldProps('password')}
          />
        </div>
        {accountRegisterFormik.touched.password &&
        accountRegisterFormik.errors.password ? (
          <div className={classes.AccountLoginErrorText}>
            {accountRegisterFormik.errors.password}
          </div>
        ) : null}
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='passwordCheck'>Confirm Password: </label>
          <input
          className={
            accountRegisterFormik.touched.passwordCheck &&
            accountRegisterFormik.errors.passwordCheck
              ? classes.AccountLoginErrorInput
              : null
          }
            name='passwordCheck'
            type='password'
            {...accountRegisterFormik.getFieldProps('passwordCheck')}
          />
        </div>
        {accountRegisterFormik.touched.passwordCheck &&
        accountRegisterFormik.errors.passwordCheck ? (
          <div className={classes.AccountLoginErrorText}>
            {accountRegisterFormik.errors.passwordCheck}
          </div>
        ) : null}
        <button type='submit'>Register</button>
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

export default Register;
