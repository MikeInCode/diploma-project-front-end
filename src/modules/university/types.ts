import {
  GetUniversity_university_departments, GetUniversity_university_groups,
  GetUniversity_university_institutes,
  GetUniversity_university_specialities
} from '../../graphQLTypes'

export interface IUniversityState {
  institutes: GetUniversity_university_institutes[]
  departments: GetUniversity_university_departments[]
  specialities: GetUniversity_university_specialities[]
  groups: GetUniversity_university_groups[]
  isLoading: boolean
}