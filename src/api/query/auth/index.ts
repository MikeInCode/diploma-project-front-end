import { apolloClient } from '../../index'
import getProfileGraphql from './getProfile'

export const AuthQueryService = {
  profile: () => apolloClient.query({ query: getProfileGraphql })
}
