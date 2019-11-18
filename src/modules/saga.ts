import { all } from 'redux-saga/effects'
import { saga as home } from './home'

export default function* rootSaga() {
  yield all([home()])
}
