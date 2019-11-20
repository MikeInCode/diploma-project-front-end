import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IAuthState } from './types'
import { onLoginAction } from './actions'

export const reducer = reducerWithInitialState<IAuthState>(initialState)
  .case(onLoginAction.started, state => ({ ...state, isLoading: true }))
  .case(onLoginAction.done, (state, payload) => ({
    ...state,
    isLoading: false
  }))
  .case(onLoginAction.failed, state => ({ ...state, isLoading: false }))
