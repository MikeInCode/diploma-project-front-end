import { combineReducers } from 'redux'
import { IRootReducer } from './types'
import { connectRouter } from 'connected-react-router'
import { history } from '../router/history'
import { reducer as auth } from './auth'
import { reducer as home } from './home'
import { reducer as user } from './user'

const router = connectRouter(history)

export const rootReducer = combineReducers<IRootReducer>({
  router,
  auth,
  home,
  user
})
