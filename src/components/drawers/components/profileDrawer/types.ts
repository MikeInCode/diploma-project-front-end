import { IBaseDrawerProps } from '../types'
import {
  GetStudents_students,
  GetTeachers_teachers
} from '../../../../graphQLTypes'

export interface IProfileDrawerProps extends IBaseDrawerProps {
  profile: GetTeachers_teachers | GetStudents_students
}
