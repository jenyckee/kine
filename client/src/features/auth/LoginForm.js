import React from 'react';
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign in</h3>
      <div className="form-group">
        <label htmlFor="firstName">Email</label>
        <Field name="email" component="input" type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Log in</button>
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm
