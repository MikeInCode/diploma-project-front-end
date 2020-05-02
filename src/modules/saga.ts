import { all } from 'redux-saga/effects'
import { saga as auth } from './auth'
import { saga as profile } from './profile'
import { saga as students } from './students'
import { saga as teachers } from './teachers'
import { saga as university } from './university'
import { saga as schedule } from './schedule'
import { saga as subjects } from './subjects'
import { saga as chat } from './chat'

export default function* rootSaga() {
  yield all([
    auth(),
    profile(),
    students(),
    teachers(),
    university(),
    schedule(),
    subjects(),
    chat()
  ])
}
