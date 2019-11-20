import { all, call, put, takeLatest } from 'redux-saga/effects'
import { Action } from 'typescript-fsa'
import { ApolloQueryResult } from 'apollo-boost'
import { onLoginAction } from './actions'
import { AuthMutationService } from '../../api/mutation/auth'

function* onLoginSaga(action: Action<any>) {
  const params = action.payload
  console.log('1')
  try {
    const result: ApolloQueryResult<any> = yield call(
      AuthMutationService.login,
      params
    )
    yield put(onLoginAction.done({ params, result }))
  } catch (error) {
    yield put(onLoginAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([takeLatest(onLoginAction.started, onLoginSaga)])
}
