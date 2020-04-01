import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getTeachersGraphql = loader('./getTeachers.graphql')

export const TeachersService = {
  getTeachers: () =>
    apolloClient.query({
      query: getTeachersGraphql
    })
}
