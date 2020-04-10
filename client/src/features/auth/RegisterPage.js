import React from 'react';
import RegisterForm from './RegisterForm';
import { useDispatch } from 'react-redux';
import { submitRegister } from './authSlice';

function RegisterPage() {
  
  const dispatch = useDispatch();

  const submit = values => {
    dispatch(submitRegister(values))
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <RegisterForm onSubmit={submit} />
      </div>
    </div>
  )
}

export default RegisterPage