import { GetEvaluations_studentMarks, GetStudents_students } from 'graphQLTypes'

export interface IStudentsState {
  isLoading: boolean
  students: IStudentType[]
  studentEvaluation: {
    isLoading: boolean
    isUpdating: boolean
    evaluations: GetEvaluations_studentMarks[]
  }
}

export interface IStudentType extends GetStudents_students {
  orderNumber: number
}
