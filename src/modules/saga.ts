import { all } from 'redux-saga/effects'
import { saga as auth } from './auth'
import { saga as home } from './home'
import { saga as students } from './students'
import { saga as teachers } from './teachers'
import { saga as university } from './university'

export default function* rootSaga() {
  yield all([auth(), home(), students(), teachers(), university()])
}
