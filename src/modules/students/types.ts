import { GetStudents_students } from '../../graphQLTypes'

export interface IStudentsState {
  isLoaded: boolean
  students: IStudentType[]
}

export interface IStudentType extends GetStudents_students {
  orderNumber: number
}
