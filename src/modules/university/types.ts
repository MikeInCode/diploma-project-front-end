import {
  GetAcademicUnits_academicUnits,
  GetGroups_groups
} from 'graphQLTypes'

export interface IUniversityState {
  isAcademicUnitsLoading: boolean
  academicUnits: GetAcademicUnits_academicUnits
  isGroupsLoading: boolean
  groups: GetGroups_groups[]
}
