import actionCreatorFactory from 'typescript-fsa'
import { GetAcademicUnits } from '../../graphQLTypes'

const actionCreator = actionCreatorFactory('university')

export const getAcademicUnitsAction = actionCreator.async<
  void,
  GetAcademicUnits,
  Error
>('GET_ACADEMIC_UNITS')
