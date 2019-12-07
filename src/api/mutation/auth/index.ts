import { apolloClient } from '../../index'
import { LoginVariables, UpdateProfileVariables } from '../../../graphQLTypes'
import loginGraphql from './login'
import updateProfileGraphql from './updateProfile'

export const AuthMutationService = {
  loginUser: (variables: LoginVariables) =>
    apolloClient.mutate({ variables, mutation: loginGraphql }),
  updateProfile: (variables: UpdateProfileVariables) =>
    apolloClient.mutate({ variables, mutation: updateProfileGraphql })
}
