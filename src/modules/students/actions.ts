import actionCreatorFactory from 'typescript-fsa'
import { GetStudents, GetStudentsVariables } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('students')

export const getStudentsAction = actionCreator.async<
  GetStudentsVariables,
  GetStudents,
  Error
>('GET_STUDENTS')

export const clearStudents = actionCreator('CLEAR_STUDENTS')
