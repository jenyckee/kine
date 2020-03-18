import React from 'react';
import LoginForm from './LoginForm';
import { useDispatch } from 'react-redux';
import { submitLogin } from './loginSlice';

function LoginPage() {
  
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(submitLogin(values))
  }

  return (
    <LoginForm onSubmit={submit} />
  )
}

export default LoginPage