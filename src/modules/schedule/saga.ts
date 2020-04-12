import { all, call, put, takeLatest } from 'redux-saga/effects'
import { getScheduleAction } from './actions'
import { ScheduleService } from '../../api/schedule'
import { ApolloQueryResult } from 'apollo-client'
import { GetSchedule } from '../../graphQLTypes'

export function* saga() {
  function* getScheduleSaga() {
    try {
      const response: ApolloQueryResult<GetSchedule> = yield call(
        ScheduleService.getSchedule
      )
      const result = response.data
      yield put(getScheduleAction.done({ result }))
    } catch (error) {
      yield put(getScheduleAction.failed({ error }))
    }
  }

  yield all([takeLatest(getScheduleAction.started, getScheduleSaga)])
}
