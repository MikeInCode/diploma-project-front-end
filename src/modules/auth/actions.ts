import actionCreatorFactory from 'typescript-fsa'
import { LoginUser, LoginUserVariables, UserMe } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('auth')

export const onLoginAction = actionCreator.async<
  LoginUserVariables,
  LoginUser,
  Error
>('ON_LOGIN')

export const userMeAction = actionCreator.async<void, UserMe, Error>('USER_ME')
