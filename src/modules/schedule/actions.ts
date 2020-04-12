import actionCreatorFactory from 'typescript-fsa'
import { GetSchedule } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('schedule')

export const getScheduleAction = actionCreator.async<void, GetSchedule, Error>(
  'GET_SCHEDULE'
)

export const clearScheduleAction = actionCreator('CLEAR_SCHEDULE')
