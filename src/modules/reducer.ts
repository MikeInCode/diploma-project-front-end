import { combineReducers } from 'redux'
import { IRootReducer } from './types'
import { reducer as auth } from './auth'
import { reducer as profile } from './profile'
import { reducer as home } from './home'
import { reducer as students } from './students'
import { reducer as teachers } from './teachers'
import { reducer as drawer } from './drawer'
import { reducer as university } from './university'
import { connectRouter } from 'connected-react-router'
import { history } from '../router/history'

const router = connectRouter(history)

export const rootReducer = combineReducers<IRootReducer>({
  router,
  auth,
  profile,
  home,
  students,
  teachers,
  drawer,
  university
})
