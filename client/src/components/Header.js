import React from 'react';
import { useDispatch } from 'react-redux';
import { submitLogout } from '../features/auth/authSlice';

function Header() {
  
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(submitLogout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><span className="nav-link" onClick={logout}>Logout</span></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header