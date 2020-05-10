import { ApolloClient } from 'apollo-client'
import { store } from 'modules'
import { onLogoutAction } from 'modules/auth'
import { setContext } from 'apollo-link-context'
import { getToken } from 'utils/token'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink, split } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

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
  uri: process.env.REACT_APP_HTTP_URL
})

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_URL,
  options: {
    reconnect: true,
    connectionParams: () => {
      const token = getToken()
      return {
        Authorization: token ? `Bearer ${token}` : ''
      }
    }
  }
})

const networkLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, networkLink]),
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
