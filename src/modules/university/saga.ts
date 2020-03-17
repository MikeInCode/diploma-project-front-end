import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { UniversityQueryService } from '../../api/query/university'
import { getUniversityAction } from './actions'

function* getUniversitySaga() {
  try {
    const response: ApolloQueryResult<any> = yield call(
      UniversityQueryService.getUniversity
    )
    const result = response.data
    yield put(getUniversityAction.done({ result }))
  } catch (error) {
    yield put(getUniversityAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getUniversityAction.started, getUniversitySaga)])
}
