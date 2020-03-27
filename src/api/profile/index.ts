import { apolloClient } from '../index'
import {
  GetProfileVariables,
  UpdateProfileVariables,
  UpdateUserVariables
} from '../../graphQLTypes'

import { loader } from 'graphql.macro'

const getProfileGraphql = loader('./getProfile.graphql')
const updateProfileGraphql = loader('./updateProfile.graphql')
const updateUserGraphql = loader('./updateUser.graphql')

export const ProfileService = {
  getProfile: (variables: GetProfileVariables) =>
    apolloClient.query({ variables, query: getProfileGraphql }),
  updateProfile: (variables: UpdateProfileVariables) =>
    apolloClient.mutate({ variables, mutation: updateProfileGraphql }),
  updateUser: (variables: UpdateUserVariables) =>
    apolloClient.mutate({ variables, mutation: updateUserGraphql })
}
