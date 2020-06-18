import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { accountResetPassword } from '../../../store/actions/';

import classes from '../Account.module.scss';

const ResetPassword = props => {
  const { userId, resetToken } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const accountResetPasswordFormik = useFormik({
    initialValues: {
      password: '',
      passwordCheck: ''
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, '*must be between 8 and 20 characters')
        .max(20, '*must be between 8 and 20 characters')
        .required('*required'),
      passwordCheck: Yup.string()
        .oneOf([Yup.ref('password')], '*passwords must match')
        .required('*required')
    }),
    onSubmit: values => {
      dispatch(accountResetPassword(userId, resetToken, values.password));
    }
  });

  if (!userId || !resetToken) {
    history.push('/');
  }

  return (
    <React.Fragment>
      <form
        onSubmit={accountResetPasswordFormik.handleSubmit}
        style={{ paddingBottom: '0', marginBottom: '2rem' }}
        noValidate
      >
        <h1>Reset Password</h1>
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='password'>New Password:</label>
          <input
            className={
              accountResetPasswordFormik.touched.password &&
              accountResetPasswordFormik.errors.password
                ? classes.AccountLoginErrorInput
                : null
            }
            name='password'
            type='password'
            {...accountResetPasswordFormik.getFieldProps('password')}
          />
        </div>
        {accountResetPasswordFormik.touched.password &&
        accountResetPasswordFormik.errors.password ? (
          <div className={classes.AccountLoginErrorText}>
            {accountResetPasswordFormik.errors.password}
          </div>
        ) : null}
        <div className={classes.AccountLoginInputField}>
          <label htmlFor='passwordCheck'>Confirm New Password: </label>
          <input
            className={
              accountResetPasswordFormik.touched.passwordCheck &&
              accountResetPasswordFormik.errors.passwordCheck
                ? classes.AccountLoginErrorInput
                : null
            }
            name='passwordCheck'
            type='password'
            {...accountResetPasswordFormik.getFieldProps('passwordCheck')}
          />
        </div>
        {accountResetPasswordFormik.touched.passwordCheck &&
        accountResetPasswordFormik.errors.passwordCheck ? (
          <div className={classes.AccountLoginErrorText}>
            {accountResetPasswordFormik.errors.passwordCheck}
          </div>
        ) : null}
        <button type='submit'>Reset Password</button>
      </form>
    </React.Fragment>
  );
};

export default ResetPassword;
