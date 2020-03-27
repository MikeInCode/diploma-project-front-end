import { apolloClient } from '../index'
import { LoginVariables } from '../../graphQLTypes'

import { loader } from 'graphql.macro'

const loginGraphql = loader('./login.graphql')

export const AuthService = {
  loginUser: (variables: LoginVariables) =>
    apolloClient.mutate({ variables, mutation: loginGraphql })
}
