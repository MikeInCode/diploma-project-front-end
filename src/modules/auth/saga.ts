import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import { getProfileAction, onLoginAction, updateProfileAction } from './actions'
import { AuthMutationService } from '../../api/mutation/auth'
import { setToken } from '../../utils/token'
import {
  GetProfile,
  Login,
  LoginVariables,
  UpdateProfile,
  UpdateProfileVariables
} from '../../graphQLTypes'
import { AuthQueryService } from '../../api/query/auth'

function* onLoginSaga(action: Action<LoginVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<Login> = yield call(
      AuthMutationService.loginUser,
      params
    )
    const result = response.data
    setToken(result.login.token)
    yield put(onLoginAction.done({ params, result }))
  } catch (error) {
    yield put(onLoginAction.failed({ params, error }))
  }
}

function* getProfileSaga() {
  try {
    const response: ApolloQueryResult<GetProfile> = yield call(
      AuthQueryService.profile
    )
    const result = response.data
    yield put(getProfileAction.done({ result }))
  } catch (error) {
    yield put(getProfileAction.failed({ error }))
  }
}

function* updateProfileSaga(action: Action<UpdateProfileVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<UpdateProfile> = yield call(
      AuthMutationService.updateProfile,
      params
    )
    const result = response.data
    yield put(updateProfileAction.done({ params, result }))
  } catch (error) {
    yield put(updateProfileAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(onLoginAction.started, onLoginSaga),
    takeLatest(getProfileAction.started, getProfileSaga),
    takeLatest(updateProfileAction.started, updateProfileSaga)
  ])
}
