import { apolloClient } from '../../index'
import loginUserGraphql from './loginUser'
import { LoginUserVariables } from '../../../graphQLTypes'

export const AuthMutationService = {
  loginUser: (variables: LoginUserVariables) =>
    apolloClient.mutate({ variables, mutation: loginUserGraphql })
}
