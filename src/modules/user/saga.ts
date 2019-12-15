import { all, takeLatest, put, call } from 'redux-saga/effects'
import {
  getCoursesAction,
  getGroupsAction,
  getSpecialtiesAction
} from './actions'
import { UserQueryService } from '../../api/query/user'

function* getSpecialtiesSaga() {
  try {
    const response = yield call(UserQueryService.getSpecialties)
    const result = response.data
    yield put(getSpecialtiesAction.done({ params: null, result }))
  } catch (error) {
    yield put(getSpecialtiesAction.failed({ params: null, error }))
  }
}

function* getCoursesSaga() {
  try {
    const response = yield call(UserQueryService.getCourses)
    const result = response.data
    yield put(getCoursesAction.done({ params: null, result }))
  } catch (error) {
    yield put(getCoursesAction.failed({ params: null, error }))
  }
}

function* getGroupsSaga() {
  try {
    const response = yield call(UserQueryService.getGroups)
    const result = response.data
    yield put(getGroupsAction.done({ params: null, result }))
  } catch (error) {
    yield put(getGroupsAction.failed({ params: null, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(getSpecialtiesAction.started, getSpecialtiesSaga),
    takeLatest(getCoursesAction.started, getCoursesSaga),
    takeLatest(getGroupsAction.started, getGroupsSaga)
  ])
}
