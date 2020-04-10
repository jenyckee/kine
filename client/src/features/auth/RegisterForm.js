import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
      </div>

      <div className="form-group">
          <label htmlFor="email">Email address</label>
          <Field name="email" component="input" type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" className="form-control" placeholder="Enter password" />
      </div>

      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      <p className="forgot-password text-right">
          Already registered <Link to="/">sign in?</Link>
      </p>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm
