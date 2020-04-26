import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IStudentsState } from './types'
import {
  getEvaluationsAction,
  getStudentsAction,
  updateEvaluationAction
} from './actions'

export const reducer = reducerWithInitialState<IStudentsState>(initialState)
  .case(getStudentsAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getStudentsAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    students: payload.result.students.map((student, i) => ({
      ...student,
      orderNumber: i + 1
    }))
  }))
  .case(getStudentsAction.failed, state => ({
    ...state,
    isLoading: false
  }))
  .case(getEvaluationsAction.started, state => ({
    ...state,
    studentEvaluation: {
      ...state.studentEvaluation,
      isLoading: true
    }
  }))
  .case(getEvaluationsAction.done, (state, payload) => ({
    ...state,
    studentEvaluation: {
      ...state.studentEvaluation,
      evaluations: payload.result.studentMarks,
      isLoading: false
    }
  }))
  .case(getEvaluationsAction.failed, state => ({
    ...state,
    studentEvaluation: {
      ...state.studentEvaluation,
      isLoading: false
    }
  }))
  .case(updateEvaluationAction.started, (state, payload) => {
    const { evaluationId, input } = payload
    return {
      ...state,
      studentEvaluation: {
        ...state.studentEvaluation,
        isUpdating: true,
        evaluations: state.studentEvaluation.evaluations.map(evaluation =>
          evaluation.id === evaluationId
            ? {
                ...evaluation,
                marks: evaluation.marks.map((item, index) => ({
                  ...item,
                  value: input[index].value
                }))
              }
            : evaluation
        )
      }
    }
  })
  .case(updateEvaluationAction.done, (state, payload) => {
    const updatedEvaluation = payload.result.updateEvaluation
    return {
      ...state,
      studentEvaluation: {
        ...state.studentEvaluation,
        isUpdating: false,
        evaluations: state.studentEvaluation.evaluations.map(evaluation =>
          evaluation.id === updatedEvaluation.id
            ? updatedEvaluation
            : evaluation
        )
      }
    }
  })
  .case(updateEvaluationAction.failed, state => ({
    ...state,
    studentEvaluation: {
      ...state.studentEvaluation,
      isUpdating: false
    }
  }))
