import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IStudentsState } from './types'
import { clearStudents, getStudentsAction } from './actions'

export const reducer = reducerWithInitialState<IStudentsState>(initialState)
  .case(getStudentsAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getStudentsAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    students: payload.result.students.map((student, i) => ({
      ...student,
      orderNumber: i + 1
    }))
  }))
  .case(getStudentsAction.failed, state => ({
    ...state,
    isLoading: false,
    isLoaded: true
  }))
  .case(clearStudents, () => initialState)
