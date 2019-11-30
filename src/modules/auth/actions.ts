import actionCreatorFactory from 'typescript-fsa'
import {
  LoginUserMutation,
  LoginUserMutationVariables
} from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('auth')

export const onLoginAction = actionCreator.async<
  LoginUserMutationVariables,
  LoginUserMutation,
  Error
>('ON_LOGIN')

export const userMeAction = actionCreator.async<void, any, Error>('USER_ME')
