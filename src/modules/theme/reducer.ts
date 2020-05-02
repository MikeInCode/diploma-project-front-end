import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IThemeState } from './types'
import { onChangeThemeAction } from './actions'

export const reducer = reducerWithInitialState<IThemeState>(initialState).case(
  onChangeThemeAction,
  (state, payload) => ({
    ...state,
    mode: payload
  })
)
