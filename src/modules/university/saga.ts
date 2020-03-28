import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { UniversityService } from 'api/university'
import { getAcademicUnitsAction, getUniversityAction } from './actions'
import { GetAcademicUnits, GetUniversity } from '../../graphQLTypes'

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

function* getUniversitySaga() {
  try {
    const response: ApolloQueryResult<GetUniversity> = yield call(
      UniversityService.getUniversity
    )
    const result = response.data
    yield put(getUniversityAction.done({ result }))
  } catch (error) {
    yield put(getUniversityAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getAcademicUnitsAction.started, getAcademicUnitsSaga)])
  yield all([takeLatest(getUniversityAction.started, getUniversitySaga)])
}
