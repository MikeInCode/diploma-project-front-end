import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory('auth')

export const onLoginAction = actionCreator.async<any, any, Error>('ON_LOGIN')
