import actionCreatorFactory from 'typescript-fsa'
import { GetAcademicUnits, GetUniversity } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('university')

export const getAcademicUnitsAction = actionCreator.async<
  void,
  GetAcademicUnits,
  Error
>('GET_ACADEMIC_UNITS')

export const getUniversityAction = actionCreator.async<
  void,
  GetUniversity,
  Error
>('GET_UNIVERSITY')
