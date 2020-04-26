import { apolloClient } from '../index'
import {
  GetEvaluationsVariables,
  GetStudentsVariables,
  UpdateEvaluationVariables
} from 'graphQLTypes'

import { loader } from 'graphql.macro'

const getStudentsGraphql = loader('./getStudents.graphql')
const getEvaluationsGraphql = loader('./getEvaluations.graphql')
const updateEvaluationGraphql = loader('./updateEvaluation.graphql')

export const StudentsService = {
  getStudents: (variables: GetStudentsVariables) =>
    apolloClient.query({
      variables,
      query: getStudentsGraphql
    }),
  getEvaluations: (variables: GetEvaluationsVariables) =>
    apolloClient.query({ variables, query: getEvaluationsGraphql }),
  updateEvaluation: (variables: UpdateEvaluationVariables) =>
    apolloClient.mutate({ variables, mutation: updateEvaluationGraphql })
}
