import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('students')

export const getStudentsAction = actionCreator.async<void, any, Error>(
  'GET_STUDENTS'
)
