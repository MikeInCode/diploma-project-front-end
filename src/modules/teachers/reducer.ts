import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { ITeachersState } from './types'
import { clearTeachers, getTeachersAction } from './actions'

export const reducer = reducerWithInitialState<ITeachersState>(initialState)
  .case(getTeachersAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getTeachersAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    teachers: payload.result.teachers
  }))
  .case(getTeachersAction.failed, state => ({
    ...state,
    isLoading: false,
    isLoaded: true
  }))
  .case(clearTeachers, () => initialState)
