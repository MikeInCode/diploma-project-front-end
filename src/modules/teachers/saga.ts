import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { TeachersService } from 'api/teachers'
import { getTeachersAction } from './actions'
import { Action } from 'typescript-fsa'
import { GetTeachersVariables } from '../../graphQLTypes'

function* getTeachersSaga(action: Action<GetTeachersVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<any> = yield call(
      TeachersService.getTeachers,
      params
    )
    const result = response.data
    yield put(getTeachersAction.done({ params, result }))
  } catch (error) {
    yield put(getTeachersAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([takeLatest(getTeachersAction.started, getTeachersSaga)])
}
