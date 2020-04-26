import { GetTeachers_teachers } from '../../graphQLTypes'

export interface ITeachersState {
  isLoading: boolean
  teachers: GetTeachers_teachers[]
}
