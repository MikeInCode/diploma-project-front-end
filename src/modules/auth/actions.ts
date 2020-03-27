import actionCreatorFactory from 'typescript-fsa'
import { Login_login_user, LoginVariables } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('auth')

export const onLoginAction = actionCreator.async<
  LoginVariables,
  Login_login_user,
  Error
>('ON_LOGIN')

export const onLogoutAction = actionCreator('ON_LOGOUT')
