import React from 'react'
import { LoginForm } from '../../components/forms/loginForm'
import { useLoginPageStyles } from './styles'
import background from '../../assets/login-image.jpeg'

const Login = React.memo(() => {
  const styles = useLoginPageStyles({})
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <LoginForm />
      </div>
      <div className={styles.backgroundWrapper}>
        <div className={styles.overlay} />
        <img className={styles.background} src={background} alt="background" />
      </div>
    </div>
  )
})

export default Login
