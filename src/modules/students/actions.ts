import actionCreatorFactory from 'typescript-fsa'
import {
  GetEvaluations,
  GetEvaluationsVariables,
  GetStudents,
  GetStudentsVariables,
  UpdateEvaluation,
  UpdateEvaluationVariables
} from 'graphQLTypes'

const actionCreator = actionCreatorFactory('students')

export const getStudentsAction = actionCreator.async<
  GetStudentsVariables,
  GetStudents,
  Error
>('GET_STUDENTS')

export const getEvaluationsAction = actionCreator.async<
  GetEvaluationsVariables,
  GetEvaluations,
  Error
>('GET_EVALUATIONS')

export const updateEvaluationAction = actionCreator.async<
  UpdateEvaluationVariables,
  UpdateEvaluation,
  Error
>('UPDATE_EVALUATION')
