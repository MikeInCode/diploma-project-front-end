import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import { getProfileAction, onLoginAction } from './actions'
import { AuthMutationService } from '../../api/mutation/auth'
import { AuthQueryService } from '../../api/query/auth'
import { push } from 'connected-react-router'
import { ROUTES } from '../../router/constants'
import { getToken, removeToken, setToken } from '../../utils/token'

function* onLoginSaga(action: Action<any>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<any> = yield call(
      AuthMutationService.login,
      params
    )
    const result = response.data
    setToken(result.token)
    yield put(onLoginAction.done({ params, result }))
    yield put(push(ROUTES.HOME))
  } catch (error) {
    yield put(onLoginAction.failed({ params, error }))
  }
}

function* getProfileSaga() {
  try {
    const token = getToken()
    if (token) {
      const response: ApolloQueryResult<any> = yield call(
        AuthQueryService.getProfile
      )
      const result = response.data
      yield put(getProfileAction.done({ params: null, result }))
    }
  } catch (error) {
    removeToken()
    yield put(getProfileAction.failed({ params: null, error }))
    yield put(push(ROUTES.LOGIN))
  }
}

export function* saga() {
  yield all([
    takeLatest(onLoginAction.started, onLoginSaga),
    takeLatest(getProfileAction.started, getProfileSaga)
  ])
}
