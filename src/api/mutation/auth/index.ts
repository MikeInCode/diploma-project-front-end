import { apolloClient } from '../../index'
import { LoginVariables } from '../../../graphQLTypes'
import loginGraphql from './login'

export const AuthMutationService = {
  loginUser: (variables: LoginVariables) =>
    apolloClient.mutate({ variables, mutation: loginGraphql })
}
