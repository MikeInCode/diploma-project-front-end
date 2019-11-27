import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('auth')

export const onLoginAction = actionCreator.async<any, any, Error>('ON_LOGIN')

export const getProfileAction = actionCreator.async<void, any, Error>(
  'GET_PROFILE'
)
