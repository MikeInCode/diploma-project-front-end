import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { ISubjectsState } from './types'
import { getSubjectsAction } from './actions'

export const reducer = reducerWithInitialState<ISubjectsState>(initialState)
  .case(getSubjectsAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getSubjectsAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    subjects: payload.result.studentSubjects
  }))
  .case(getSubjectsAction.failed, state => ({
    ...state,
    isLoading: false
  }))
