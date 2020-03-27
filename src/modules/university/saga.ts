import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { UniversityService } from '../../api/university'
import { getAcademicUnitsAction } from './actions'
import { GetAcademicUnits } from '../../graphQLTypes'

function* getAcademicUnitsSaga() {
  try {
    const response: ApolloQueryResult<GetAcademicUnits> = yield call(
      UniversityService.getAcademicUnits
    )
    const result = response.data
    yield put(getAcademicUnitsAction.done({ result }))
  } catch (error) {
    yield put(getAcademicUnitsAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getAcademicUnitsAction.started, getAcademicUnitsSaga)])
}
