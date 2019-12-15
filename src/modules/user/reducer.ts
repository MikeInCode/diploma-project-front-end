import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IUserState } from './types'
import {
  getCoursesAction,
  getGroupsAction,
  getSpecialtiesAction
} from './actions'

export const reducer = reducerWithInitialState<IUserState>(initialState)
  .case(getSpecialtiesAction.started, state => ({
    ...state,
    isSpecialitiesLoading: true
  }))
  .case(getSpecialtiesAction.done, (state, payload) => ({
    ...state,
    isSpecialitiesLoading: false,
    specialities: payload.result
  }))
  .case(getSpecialtiesAction.failed, state => ({
    ...state,
    isSpecialitiesLoading: false
  }))
  .case(getCoursesAction.started, state => ({
    ...state,
    isCoursesLoading: true
  }))
  .case(getCoursesAction.done, (state, payload) => ({
    ...state,
    isCoursesLoading: false,
    courses: payload.result
  }))
  .case(getCoursesAction.failed, state => ({
    ...state,
    isCoursesLoading: false
  }))
  .case(getGroupsAction.started, state => ({
    ...state,
    isGroupsLoading: true
  }))
  .case(getGroupsAction.done, (state, payload) => ({
    ...state,
    isGroupsLoading: false,
    groups: payload.result
  }))
  .case(getGroupsAction.failed, state => ({
    ...state,
    isGroupsLoading: false
  }))
