import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IAuthState } from './types'
import {
  getProfileAction,
  onLoginAction,
  onLogoutAction,
  updateProfileAction
} from './actions'
import { removeToken } from '../../utils/token'

export const reducer = reducerWithInitialState<IAuthState>(initialState)
  .case(onLoginAction.started, state => ({
    ...state,
    isLoading: true,
    isInvalidCredentials: false
  }))
  .case(onLoginAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    isAuthenticated: true,
    user: payload.result.login.user
  }))
  .case(onLoginAction.failed, (state, payload) => ({
    ...state,
    isLoading: false,
    isInvalidCredentials: payload.error.message.includes('Invalid credentials!')
  }))
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
  .case(onLogoutAction, () => {
    removeToken()
    return initialState
  })
