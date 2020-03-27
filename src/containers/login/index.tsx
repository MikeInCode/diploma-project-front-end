import React from 'react'
import { useLoginPageStyles } from './styles'
import background from 'assets/login-image.jpeg'
import { Redirect } from 'react-router-dom'
import { ROUTES } from 'router/constants'
import { IRootReducer } from 'modules/types'
import { onLoginAction } from 'modules/auth'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { LoginForm } from 'components/forms/loginForm'
import { ILoginFormValues } from 'components/forms/loginForm/types'

const mapState = ({
  auth: { isAuthenticated, isLoading, isInvalidCredentials }
}: IRootReducer) => ({
  isAuthenticated,
  isLoading,
  isInvalidCredentials
})

const Login = React.memo(() => {
  const styles = useLoginPageStyles({})

  const { isAuthenticated, isLoading, isInvalidCredentials } = useSelector(
    mapState,
    shallowEqual
  )

  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    (values: ILoginFormValues) =>
      dispatch(onLoginAction.started({ input: values })),
    [dispatch]
  )

  return !isAuthenticated ? (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <LoginForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          isInvalidCredentials={isInvalidCredentials}
        />
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
