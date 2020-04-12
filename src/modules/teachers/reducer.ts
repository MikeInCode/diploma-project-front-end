import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { ITeachersState } from './types'
import { clearTeachersAction, getTeachersAction } from './actions'

export const reducer = reducerWithInitialState<ITeachersState>(initialState)
  .case(getTeachersAction.started, state => ({
    ...state,
    isLoaded: false
  }))
  .case(getTeachersAction.done, (state, payload) => ({
    ...state,
    isLoaded: true,
    teachers: payload.result.teachers
  }))
  .case(getTeachersAction.failed, state => ({
    ...state,
    isLoaded: true
  }))
  .case(clearTeachersAction, () => initialState)
