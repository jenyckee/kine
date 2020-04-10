import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { submitLogin } from './authSlice';

function LoginPage() {
  
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(submitLogin(values))
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <LoginForm onSubmit={submit} />
      </div>
    </div>
  )
}

export default LoginPage