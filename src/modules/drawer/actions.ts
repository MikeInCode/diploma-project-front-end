import actionCreatorFactory from 'typescript-fsa'
import { IDrawerType } from './types'

const actionCreator = actionCreatorFactory('drawer')

export const openDrawerAction = actionCreator<IDrawerType>('OPEN_DRAWER')

export const closeDrawerAction = actionCreator('CLOSE_DRAWER')
