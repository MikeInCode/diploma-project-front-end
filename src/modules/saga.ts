import { all } from 'redux-saga/effects'
import { saga as auth } from './auth'
import { saga as home } from './home'
import { saga as user } from './user'

export default function* rootSaga() {
  yield all([auth(), home(), user()])
}
