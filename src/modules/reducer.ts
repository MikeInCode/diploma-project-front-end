import { combineReducers } from 'redux'
import { IRootReducer } from './types'
import { reducer as home } from './home'
import { connectRouter } from 'connected-react-router'
import { history } from '../router/history'

const router = connectRouter(history)

export const rootReducer = combineReducers<IRootReducer>({
  router,
  home
})
