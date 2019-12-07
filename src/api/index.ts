import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { store } from '../modules'
import { ErrorsEnum } from '../enums'
import { API_URL } from '../constants'
import { onLogoutAction } from '../modules/auth'
import { getToken } from '../utils/token'

export const apolloClient = new ApolloClient({
  uri: API_URL,
  request: operation => {
    const token = getToken()
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  onError: ({ graphQLErrors }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(error => {
        if (ErrorsEnum.INVALID_TOKEN === error.message) {
          store.dispatch(onLogoutAction())
        }
      })
    }
  },
  cache: new InMemoryCache({
    addTypename: false
  })
})
