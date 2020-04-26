import { IBaseDrawerProps } from '../types'
import { GetStudents_students } from 'graphQLTypes'

export interface IAssessmentDrawerProps extends IBaseDrawerProps {
  student: GetStudents_students
}
