import React from 'react'
import { LoginForm } from '../../components/forms/loginForm'
import { useLoginPageStyles } from './styles'
import background from '../../assets/login-image.jpeg'
import { getToken } from '../../utils/token'
import { Redirect } from 'react-router'
import { ROUTES } from '../../router/constants'

const Login = React.memo(() => {
  const styles = useLoginPageStyles({})
  return !getToken() ? (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <LoginForm />
      </div>
      <div className={styles.backgroundWrapper}>
        <div className={styles.overlay} />
        <img className={styles.background} src={background} alt="background" />
      </div>
    </div>
  ) : (
    <Redirect to={ROUTES.HOME} />
  )
})

export default Login
