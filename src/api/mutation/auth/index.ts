import { apolloClient } from '../../index'
import { LoginVariables, UpdateProfileVariables } from '../../../graphQLTypes'

import { loader } from 'graphql.macro'

const loginGraphql = loader('./login.graphql')
const updateProfileGraphql = loader('./updateProfile.graphql')

export const AuthMutationService = {
  loginUser: (variables: LoginVariables) =>
    apolloClient.mutate({ variables, mutation: loginGraphql }),
  updateProfile: (variables: UpdateProfileVariables) =>
    apolloClient.mutate({ variables, mutation: updateProfileGraphql })
}
