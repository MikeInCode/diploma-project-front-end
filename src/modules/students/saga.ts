import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { StudentsQueryService } from '../../api/query/students'
import { getStudentsAction } from './actions'

function* getStudentsSaga() {
  try {
    const response: ApolloQueryResult<any> = yield call(
      StudentsQueryService.getStudents
    )
    const result = response.data
    yield put(getStudentsAction.done({ result }))
  } catch (error) {
    yield put(getStudentsAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getStudentsAction.started, getStudentsSaga)])
}
