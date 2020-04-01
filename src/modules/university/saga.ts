import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { UniversityService } from 'api/university'
import { getAcademicUnitsAction, getGroupsAction } from './actions'
import { GetAcademicUnits, GetGroups } from '../../graphQLTypes'

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

function* getGroupsSaga() {
  try {
    const response: ApolloQueryResult<GetGroups> = yield call(
      UniversityService.getGroups
    )
    const result = response.data
    yield put(getGroupsAction.done({ result }))
  } catch (error) {
    yield put(getGroupsAction.failed({ error }))
  }
}

export function* saga() {
  yield all([takeLatest(getAcademicUnitsAction.started, getAcademicUnitsSaga)])
  yield all([takeLatest(getGroupsAction.started, getGroupsSaga)])
}
