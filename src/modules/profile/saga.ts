import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import {
  getProfileAction,
  updateProfileAction,
  updateUserAction
} from './actions'
import {
  GetProfile,
  GetProfileVariables,
  UpdateProfile,
  UpdateProfileVariables,
  UpdateUser,
  UpdateUserVariables
} from '../../graphQLTypes'
import { ProfileService } from '../../api/profile'
import { onLoginAction } from '../auth'

function* getProfileSaga(action: Action<GetProfileVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<GetProfile> = yield call(
      ProfileService.getProfile,
      params
    )
    const result = response.data
    yield put(getProfileAction.done({ params, result }))
    if (!action.payload.id) {
      yield put(onLoginAction.done({ params: null, result: result.profile }))
    }
  } catch (error) {
    yield put(getProfileAction.failed({ params, error }))
  }
}

function* updateProfileSaga(action: Action<UpdateProfileVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<UpdateProfile> = yield call(
      ProfileService.updateProfile,
      params
    )
    const result = response.data
    yield put(updateProfileAction.done({ params, result }))
  } catch (error) {
    yield put(updateProfileAction.failed({ params, error }))
  }
}

function* updateUserSaga(action: Action<UpdateUserVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<UpdateUser> = yield call(
      ProfileService.updateUser,
      params
    )
    const result = response.data
    yield put(updateUserAction.done({ params, result }))
  } catch (error) {
    yield put(updateUserAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(getProfileAction.started, getProfileSaga),
    takeLatest(updateProfileAction.started, updateProfileSaga),
    takeLatest(updateUserAction.started, updateUserSaga)
  ])
}
