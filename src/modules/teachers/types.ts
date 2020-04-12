import { GetTeachers_teachers } from '../../graphQLTypes'

export interface ITeachersState {
  isLoaded: boolean
  teachers: GetTeachers_teachers[]
}
