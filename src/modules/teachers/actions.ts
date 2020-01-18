import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('teachers')

export const getTeachersAction = actionCreator.async<void, any, Error>(
  'GET_TEACHERS'
)
