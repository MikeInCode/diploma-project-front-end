import React from 'react'
import { LoginForm } from '../../components/forms/loginForm'
import { useLoginPageStyles } from './styles'
import background from '../../assets/login-image.jpeg'
import { Redirect } from 'react-router-dom'
import { ROUTES } from '../../router/constants'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useSelector } from 'react-redux'

const mapState = ({ auth: { isAuthenticated } }: IRootReducer) => ({
  isAuthenticated
})

const Login = React.memo(() => {
  const styles = useLoginPageStyles({})

  const { isAuthenticated } = useSelector(mapState, shallowEqual)

  return !isAuthenticated ? (
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
