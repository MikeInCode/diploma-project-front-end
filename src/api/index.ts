import ApolloClient from 'apollo-boost'
import { store } from '../modules'
import { removeToken } from '../utils/token'
import { push } from 'connected-react-router'
import { ROUTES } from '../router/constants'
import { ErrorsEnum } from '../enums'

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  onError: ({ graphQLErrors }) => {
    graphQLErrors.forEach(error => {
      if (ErrorsEnum.INVALID_TOKEN === error.message) {
        removeToken()
        store.dispatch(push(ROUTES.LOGIN))
      }
    })
  }
})
