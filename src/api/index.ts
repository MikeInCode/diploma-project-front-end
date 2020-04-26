import { ApolloClient } from 'apollo-client'
import { store } from 'modules'
import { onLogoutAction } from 'modules/auth'
import { setContext } from 'apollo-link-context'
import { getToken } from 'utils/token'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

const authLink = setContext(() => {
  const token = getToken()
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(error => {
      if (error.message === 'Not Authorised!') {
        store.dispatch(onLogoutAction())
      }
    })
  }
})

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL
})

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    },
    mutate: {
      fetchPolicy: 'no-cache'
    }
  }
})
