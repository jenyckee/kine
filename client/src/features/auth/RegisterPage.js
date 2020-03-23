import React from 'react';
import RegisterForm from './RegisterForm';
import { useDispatch } from 'react-redux';
import { submitLogin } from './authSlice';

function RegisterPage() {
  
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(submitLogin(values))
  }

  return (
    <RegisterForm onSubmit={submit} />
  )
}

export default RegisterPage