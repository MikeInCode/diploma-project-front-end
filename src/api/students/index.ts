import { apolloClient } from '../index'
import { GetStudentsVariables } from '../../graphQLTypes'

import { loader } from 'graphql.macro'

const getStudentsGraphql = loader('./getStudents.graphql')

export const StudentsService = {
  getStudents: (variables: GetStudentsVariables) =>
    apolloClient.query({
      variables,
      query: getStudentsGraphql
    })
}
