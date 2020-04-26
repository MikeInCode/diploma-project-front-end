import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IScheduleState } from './types'
import { getScheduleAction } from './actions'
import { adaptSchedule } from './adapters'

export const reducer = reducerWithInitialState<IScheduleState>(initialState)
  .case(getScheduleAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getScheduleAction.done, (state, payload) => ({
    ...state,
    schedule: adaptSchedule(payload.result.schedule),
    isLoading: false
  }))
  .case(getScheduleAction.failed, state => ({
    ...state,
    isLoading: false
  }))
