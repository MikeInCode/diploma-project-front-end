import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getSubjectsGraphql = loader('./getSubjects.graphql')

export const SubjectService = {
  getSubjects: () =>
    apolloClient.query({
      query: getSubjectsGraphql
    })
}
