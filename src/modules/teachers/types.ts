import { GetTeachers_teachers } from '../../graphQLTypes'

export interface ITeachersState {
  isLoading: boolean
  isLoaded: boolean
  teachers: GetTeachers_teachers[]
}
