import {
  GetAcademicUnits_academicUnits,
  GetUniversity_university
} from '../../graphQLTypes'

export interface IUniversityState {
  isAcademicUnitsLoading: boolean
  academicUnits: GetAcademicUnits_academicUnits
  isUniversityLoading: boolean
  university: GetUniversity_university[]
}
