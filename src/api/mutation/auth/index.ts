import { apolloClient } from '../../index'
import loginUserGraphql from './loginUser'
import { LoginUserMutationVariables } from '../../../graphQLTypes'

export const AuthMutationService = {
  loginUser: (variables: LoginUserMutationVariables) =>
    apolloClient.mutate({ variables, mutation: loginUserGraphql })
}
