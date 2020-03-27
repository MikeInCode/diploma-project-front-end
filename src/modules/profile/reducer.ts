import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IProfileState } from './types'
import {
  getProfileAction,
  updateProfileAction,
  updateUserAction
} from './actions'

export const reducer = reducerWithInitialState<IProfileState>(initialState)
  .case(getProfileAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getProfileAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.result.profile
  }))
  .case(getProfileAction.failed, state => ({
    ...state,
    isLoading: false
  }))
  .case(updateProfileAction.started, state => ({
    ...state,
    isProfileUpdating: true
  }))
  .case(updateProfileAction.done, (state, payload) => ({
    ...state,
    isProfileUpdating: false,
    user: payload.result.updateProfile
  }))
  .case(updateProfileAction.failed, state => ({
    ...state,
    isProfileUpdating: false
  }))
  .case(updateUserAction.started, state => ({
    ...state,
    isProfileUpdating: true
  }))
  .case(updateUserAction.done, (state, payload) => ({
    ...state,
    isProfileUpdating: false,
    user: payload.result.updateUser
  }))
  .case(updateUserAction.failed, state => ({
    ...state,
    isProfileUpdating: false
  }))
