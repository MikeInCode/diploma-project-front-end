import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IAuthState } from './types'
import { getProfileAction, onLoginAction } from './actions'

export const reducer = reducerWithInitialState<IAuthState>(initialState)
  .case(onLoginAction.started, state => ({ ...state, isLoading: true }))
  .case(onLoginAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.result.user
  }))
  .case(onLoginAction.failed, state => ({
    ...state,
    isLoading: false
  }))
  .case(getProfileAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getProfileAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.result.user
  }))
  .case(getProfileAction.failed, state => ({
    ...state,
    isLoading: false,
    user: null
  }))
