import React from 'react'
import { LoginForm } from '../../components/forms/loginForm'

const Login = React.memo(() => {
  return (
    <div style={{ width: 300 }}>
      <LoginForm />
    </div>
  )
})

export default Login
