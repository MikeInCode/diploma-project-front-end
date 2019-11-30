import { apolloClient } from '../../index'
import userMeGraphql from './userMe'

export const AuthQueryService = {
  userMe: () => apolloClient.query({ query: userMeGraphql })
}
