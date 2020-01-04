import { all } from 'redux-saga/effects'
import { saga as auth } from './auth'
import { saga as home } from './students'

export default function* rootSaga() {
  yield all([auth(), home()])
}
