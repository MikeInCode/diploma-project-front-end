import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IStudentsState } from './types'
import { getStudentsAction } from './actions'

export const reducer = reducerWithInitialState<IStudentsState>(initialState)
  .case(getStudentsAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getStudentsAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    students: payload.result
  }))
  .case(getStudentsAction.failed, state => ({
    ...state,
    isLoading: false
  }))
