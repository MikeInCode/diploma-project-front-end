import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('user')

export const getSpecialtiesAction = actionCreator.async<void, any, Error>(
  'GET_SPECIALTIES'
)

export const getCoursesAction = actionCreator.async<void, any, Error>(
  'GET_COURSES'
)

export const getGroupsAction = actionCreator.async<void, any, Error>(
  'GET_GROUPS'
)
