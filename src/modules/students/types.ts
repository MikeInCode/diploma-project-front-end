import { GetStudents_students } from '../../graphQLTypes'

export interface IStudentsState {
  isLoading: boolean
  isLoaded: boolean
  students: GetStudents_students[]
}
