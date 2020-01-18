import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IDrawerState } from './types'
import { closeDrawerAction, openDrawerAction } from './actions'

export const reducer = reducerWithInitialState<IDrawerState>(initialState)
  .case(openDrawerAction, (state, payload) => ({
    ...state,
    opened: payload
  }))
  .case(closeDrawerAction, () => initialState)
