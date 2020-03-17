import { apolloClient } from '../../index'

import { loader } from 'graphql.macro'

const getUniversityGraphql = loader('./getUniversity.graphql')

export const UniversityQueryService = {
  getUniversity: () => apolloClient.query({ query: getUniversityGraphql })
}
