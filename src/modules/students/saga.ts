import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { Action } from 'typescript-fsa'
import { StudentsService } from 'api/students'
import { getStudentsAction } from './actions'
import { GetStudents, GetStudentsVariables } from '../../graphQLTypes'

function* getStudentsSaga(action: Action<GetStudentsVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<GetStudents> = yield call(
      StudentsService.getStudents,
      params
    )
    const result = response.data
    yield put(getStudentsAction.done({ params, result }))
  } catch (error) {
    yield put(getStudentsAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([takeLatest(getStudentsAction.started, getStudentsSaga)])
}
