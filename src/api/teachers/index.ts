import { apolloClient } from '../index'
import { GetTeachersVariables } from '../../graphQLTypes'

import { loader } from 'graphql.macro'

const getTeachersGraphql = loader('./getTeachers.graphql')

export const TeachersService = {
  getTeachers: (variables: GetTeachersVariables) =>
    apolloClient.query({
      variables,
      query: getTeachersGraphql
    })
}
