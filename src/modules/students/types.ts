import { GetStudents_students } from '../../graphQLTypes'

export interface IStudentsState {
  isLoading: boolean
  isLoaded: boolean
  students: IStudentType[]
}

export interface IStudentType extends GetStudents_students {
  orderNumber: number
}
