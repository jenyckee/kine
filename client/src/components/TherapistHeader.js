import React from 'react';
import { useDispatch } from 'react-redux';
import { submitLogout } from '../features/auth/authSlice';
import { Link, useRouteMatch } from 'react-router-dom'

function Header() {
  
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const logout = () => {
    dispatch(submitLogout())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={`${match.url}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={`${match.url}/patients`}>Patients</Link>
            </li>
            <li className="nav-item">
              <Link to={`${match.url}/exercises`}>Exercises</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><span className="nav-link" onClick={logout}>Logout</span></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header