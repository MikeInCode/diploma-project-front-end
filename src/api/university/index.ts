import { apolloClient } from '../index'

import { loader } from 'graphql.macro'

const getAcademicUnitsGraphql = loader('./getAcademicUnits.graphql')

export const UniversityService = {
  getAcademicUnits: () => apolloClient.query({ query: getAcademicUnitsGraphql })
}
