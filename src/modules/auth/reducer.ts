import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IAuthState } from './types'
import { onLoginAction, userMeAction } from './actions'
import { ErrorsEnum } from '../../enums'

export const reducer = reducerWithInitialState<IAuthState>(initialState)
  .case(onLoginAction.started, state => ({
    ...state,
    isLoading: true,
    isInvalidCredentials: false
  }))
  .case(onLoginAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.result.loginUser.user
  }))
  .case(onLoginAction.failed, (state, payload) => ({
    ...state,
    isLoading: false,
    isInvalidCredentials: payload.error.message.includes(
      ErrorsEnum.INVALID_CREDENTIALS
    )
  }))
  .case(userMeAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(userMeAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    user: payload.result.user
  }))
  .case(userMeAction.failed, state => ({
    ...state,
    isLoading: false,
    user: null
  }))
