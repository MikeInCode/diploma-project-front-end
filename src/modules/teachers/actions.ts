import actionCreatorFactory from 'typescript-fsa'
import { GetTeachers } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('teachers')

export const getTeachersAction = actionCreator.async<void, GetTeachers, Error>(
  'GET_TEACHERS'
)

export const clearTeachersAction = actionCreator('CLEAR_TEACHERS')
