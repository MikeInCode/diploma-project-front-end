import actionCreatorFactory from 'typescript-fsa'
import { GetTeachers, GetTeachersVariables } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('teachers')

export const getTeachersAction = actionCreator.async<
  GetTeachersVariables,
  GetTeachers,
  Error
>('GET_TEACHERS')

export const clearTeachers = actionCreator('CLEAR_TEACHERS')
