import { combineReducers } from 'redux'
import { IRootReducer } from './types'
import { reducer as auth } from './auth'
import { reducer as profile } from './profile'
import { reducer as students } from './students'
import { reducer as teachers } from './teachers'
import { reducer as drawer } from './drawer'
import { reducer as university } from './university'
import { reducer as schedule } from './schedule'
import { reducer as subjects } from './subjects'
import { reducer as chat } from './chat'
import { reducer as theme } from './theme'
import { connectRouter } from 'connected-react-router'
import { history } from '../router/history'

const router = connectRouter(history)

export const rootReducer = combineReducers<IRootReducer>({
  router,
  auth,
  profile,
  students,
  teachers,
  drawer,
  university,
  schedule,
  subjects,
  chat,
  theme
})
