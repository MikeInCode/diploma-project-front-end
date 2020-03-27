import { GetAcademicUnits_academicUnits } from '../../graphQLTypes'

export interface IUniversityState {
  isAcademicUnitsLoading: boolean
  academicUnits: GetAcademicUnits_academicUnits
}
