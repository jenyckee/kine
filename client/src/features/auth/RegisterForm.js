import React from 'react';
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm
