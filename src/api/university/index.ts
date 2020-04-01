import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getAcademicUnitsGraphql = loader('./getAcademicUnits.graphql')
const getGroupsGraphql = loader('./getGroups.graphql')

export const UniversityService = {
  getAcademicUnits: () =>
    apolloClient.query({ query: getAcademicUnitsGraphql }),
  getGroups: () => apolloClient.query({ query: getGroupsGraphql })
}
