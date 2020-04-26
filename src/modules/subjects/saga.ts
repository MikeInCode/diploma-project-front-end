import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { getSubjectsAction } from './actions'
import { GetSubjects } from 'graphQLTypes'
import { SubjectService } from 'api/subjects'

function* getSubjectsSaga() {
  try {
    const response: ApolloQueryResult<GetSubjects> = yield call(
      SubjectService.getSubjects
    )
    const result = response.data
    yield put(getSubjectsAction.done({ result }))
  } catch (error) {
    yield put(getSubjectsAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getSubjectsAction.started, getSubjectsSaga)])
}
