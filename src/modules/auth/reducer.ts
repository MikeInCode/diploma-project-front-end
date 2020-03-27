import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IAuthState } from './types'
import { onLoginAction, onLogoutAction } from './actions'
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
    user: payload.result
  }))
  .case(onLoginAction.failed, (state, payload) => ({
    ...state,
    isLoading: false,
    isInvalidCredentials: payload.error.message.includes('Invalid credentials!')
  }))
  .case(onLogoutAction, () => {
    removeToken()
    return initialState
  })
