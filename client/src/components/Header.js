import React from 'react';
import { useDispatch } from 'react-redux';
import { submitLogout } from '../features/auth/authSlice';

function Header() {
  
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(submitLogout())
  }

  return (
    <header className="App-header">
      <button onClick={logout}>Logout</button>
    </header>
  )
}

export default Header