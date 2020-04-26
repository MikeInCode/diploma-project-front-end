import { IStudentsState } from './types'

export const initialState: IStudentsState = {
  isLoading: false,
  students: [],
  studentEvaluation: {
    isLoading: false,
    isUpdating: false,
    evaluations: []
  }
}
