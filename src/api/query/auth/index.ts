import { apolloClient } from '../../index'

import { loader } from 'graphql.macro'

const getProfileGraphql = loader('./getProfile.graphql')

export const AuthQueryService = {
  getProfile: () => apolloClient.query({ query: getProfileGraphql })
}
