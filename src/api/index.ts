import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { store } from '../modules'
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
        if (error.message === 'Not Authorised!') {
          store.dispatch(onLogoutAction())
        }
      })
    }
  },
  cache: new InMemoryCache({
    addTypename: false
  })
})
