import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IUniversityState } from './types'
import { getUniversityAction } from './actions'

export const reducer = reducerWithInitialState<IUniversityState>(initialState)
  .case(getUniversityAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getUniversityAction.done, (state, payload) => ({
    ...state,
    ...payload.result.university,
    isLoading: false
  }))
  .case(getUniversityAction.failed, state => ({
    ...state,
    isLoading: false
  }))
