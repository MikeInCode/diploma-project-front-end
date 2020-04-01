import actionCreatorFactory from 'typescript-fsa'
import { GetAcademicUnits, GetGroups } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('university')

export const getAcademicUnitsAction = actionCreator.async<
  void,
  GetAcademicUnits,
  Error
>('GET_ACADEMIC_UNITS')

export const getGroupsAction = actionCreator.async<void, GetGroups, Error>(
  'GET_GROUPS'
)
