import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { TeachersQueryService } from '../../api/query/teachers'
import { getTeachersAction } from './actions'

function* getTeachersSaga() {
  try {
    const response: ApolloQueryResult<any> = yield call(
      TeachersQueryService.getTeachers
    )
    const result = response.data
    yield put(getTeachersAction.done({ result }))
  } catch (error) {
    yield put(getTeachersAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getTeachersAction.started, getTeachersSaga)])
}
