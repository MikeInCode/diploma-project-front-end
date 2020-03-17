import actionCreatorFactory from 'typescript-fsa'
import { GetUniversity } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('university')

export const getUniversityAction = actionCreator.async<
  void,
  GetUniversity,
  Error
>('GET_UNIVERSITY')
