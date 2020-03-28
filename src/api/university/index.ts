import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getAcademicUnitsGraphql = loader('./getAcademicUnits.graphql')
const getUniversityGraphql = loader('./getUniversity.graphql')

export const UniversityService = {
  getAcademicUnits: () =>
    apolloClient.query({ query: getAcademicUnitsGraphql }),
  getUniversity: () => apolloClient.query({ query: getUniversityGraphql })
}
