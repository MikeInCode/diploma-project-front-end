import { GetSubjects_studentSubjects } from 'graphQLTypes'

export interface ISubjectsState {
  isLoading: boolean
  subjects: GetSubjects_studentSubjects[]
}
