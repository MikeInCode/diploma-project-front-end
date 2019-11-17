import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IHomeState } from './types'

export const reducer = reducerWithInitialState<IHomeState>(initialState)
