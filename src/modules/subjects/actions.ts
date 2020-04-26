import actionCreatorFactory from 'typescript-fsa'
import { GetSubjects } from 'graphQLTypes'

const actionCreator = actionCreatorFactory('subjects')

export const getSubjectsAction = actionCreator.async<void, GetSubjects, Error>(
  'GET_SUBJECTS'
)
