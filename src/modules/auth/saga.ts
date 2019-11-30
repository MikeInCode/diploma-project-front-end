import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import { userMeAction, onLoginAction } from './actions'
import { AuthMutationService } from '../../api/mutation/auth'
import { AuthQueryService } from '../../api/query/auth'
import { push } from 'connected-react-router'
import { ROUTES } from '../../router/constants'
import { getToken, setToken } from '../../utils/token'
import { LoginUserMutation } from '../../graphQLTypes'

function* onLoginSaga(action: Action<any>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<LoginUserMutation> = yield call(
      AuthMutationService.loginUser,
      params
    )
    const result = response.data
    setToken(result.loginUser.token)
    yield put(onLoginAction.done({ params, result }))
    yield put(push(ROUTES.HOME))
  } catch (error) {
    yield put(onLoginAction.failed({ params, error }))
  }
}

function* userMeSaga() {
  try {
    const token = getToken()
    if (token) {
      const response: ApolloQueryResult<any> = yield call(
        AuthQueryService.userMe
      )
      const result = response.data
      yield put(userMeAction.done({ params: null, result }))
    } else {
      yield put(userMeAction.failed({ params: null, error: null }))
    }
  } catch (error) {
    yield put(userMeAction.failed({ params: null, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(onLoginAction.started, onLoginSaga),
    takeLatest(userMeAction.started, userMeSaga)
  ])
}
