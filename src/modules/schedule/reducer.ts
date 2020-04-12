import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IScheduleState } from './types'
import { clearScheduleAction, getScheduleAction } from './actions'
import { adaptSchedule } from './adapters'

export const reducer = reducerWithInitialState<IScheduleState>(initialState)
  .case(getScheduleAction.started, state => ({
    ...state,
    isLoaded: false
  }))
  .case(getScheduleAction.done, (state, payload) => ({
    ...state,
    schedule: adaptSchedule(payload.result.schedule),
    isLoaded: true
  }))
  .case(getScheduleAction.failed, state => ({
    ...state,
    isLoaded: true
  }))
  .case(clearScheduleAction, () => initialState)
