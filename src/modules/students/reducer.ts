import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IStudentsState } from './types'
import { clearStudentsAction, getStudentsAction } from './actions'

export const reducer = reducerWithInitialState<IStudentsState>(initialState)
  .case(getStudentsAction.started, state => ({
    ...state,
    isLoaded: false
  }))
  .case(getStudentsAction.done, (state, payload) => ({
    ...state,
    isLoaded: true,
    students: payload.result.students.map((student, i) => ({
      ...student,
      orderNumber: i + 1
    }))
  }))
  .case(getStudentsAction.failed, state => ({
    ...state,
    isLoaded: true
  }))
  .case(clearStudentsAction, () => initialState)
