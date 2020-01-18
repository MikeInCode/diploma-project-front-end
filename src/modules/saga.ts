import { all } from 'redux-saga/effects'
import { saga as auth } from './auth'
import { saga as home } from './home'
import { saga as students } from './students'
import { saga as teachers } from './teachers'

export default function* rootSaga() {
  yield all([auth(), home(), students(), teachers()])
}
