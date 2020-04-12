import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getScheduleGraphql = loader('./getSchedule.graphql')

export const ScheduleService = {
  getSchedule: () =>
    apolloClient.query({
      query: getScheduleGraphql
    })
}
