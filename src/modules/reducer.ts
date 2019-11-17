import { combineReducers } from 'redux'
import { IRootReducer } from './types'
import { reducer as home } from './home'

export const rootReducer = combineReducers<IRootReducer>({
  home
})
