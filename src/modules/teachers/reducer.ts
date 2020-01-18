import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { ITeachersState } from './types'
import { getTeachersAction } from './actions'

export const reducer = reducerWithInitialState<ITeachersState>(initialState)
  .case(getTeachersAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getTeachersAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    teachers: payload.result
  }))
  .case(getTeachersAction.failed, state => ({
    ...state,
    isLoading: false
  }))
