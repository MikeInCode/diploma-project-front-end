import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IUniversityState } from './types'
import { getAcademicUnitsAction } from './actions'

export const reducer = reducerWithInitialState<IUniversityState>(initialState)
  .case(getAcademicUnitsAction.started, state => ({
    ...state,
    isAcademicUnitsLoading: true
  }))
  .case(getAcademicUnitsAction.done, (state, payload) => ({
    ...state,
    academicUnits: payload.result.academicUnits,
    isAcademicUnitsLoading: false
  }))
  .case(getAcademicUnitsAction.failed, state => ({
    ...state,
    isAcademicUnitsLoading: false
  }))
