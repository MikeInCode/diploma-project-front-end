import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import { onLoginAction } from './actions'
import { AuthService } from '../../api/auth'
import { setToken } from '../../utils/token'
import { Login, LoginVariables } from '../../graphQLTypes'

function* onLoginSaga(action: Action<LoginVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<Login> = yield call(
      AuthService.loginUser,
      params
    )
    const result = response.data
    setToken(result.login.token)
    yield put(onLoginAction.done({ params, result: result.login.user }))
  } catch (error) {
    yield put(onLoginAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([takeLatest(onLoginAction.started, onLoginSaga)])
}
