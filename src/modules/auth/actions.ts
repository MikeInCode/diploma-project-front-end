import actionCreatorFactory from 'typescript-fsa'
import {
  GetProfile,
  Login,
  LoginVariables,
  UpdateProfile,
  UpdateProfileVariables
} from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('profile')

export const onLoginAction = actionCreator.async<LoginVariables, Login, Error>(
  'ON_LOGIN'
)

export const onLogoutAction = actionCreator('ON_LOGOUT')

export const getProfileAction = actionCreator.async<void, GetProfile, Error>(
  'GET_PROFILE'
)

export const updateProfileAction = actionCreator.async<
  UpdateProfileVariables,
  UpdateProfile,
  Error
>('UPDATE_PROFILE')
