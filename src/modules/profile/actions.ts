import actionCreatorFactory from 'typescript-fsa'
import {
  GetProfile,
  GetProfileVariables,
  UpdateProfile,
  UpdateProfileVariables,
  UpdateUser,
  UpdateUserVariables
} from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('profile')

export const getProfileAction = actionCreator.async<
  GetProfileVariables,
  GetProfile,
  Error
>('GET_PROFILE')

export const updateProfileAction = actionCreator.async<
  UpdateProfileVariables,
  UpdateProfile,
  Error
>('UPDATE_PROFILE')

export const updateUserAction = actionCreator.async<
  UpdateUserVariables,
  UpdateUser,
  Error
>('UPDATE_USER')
