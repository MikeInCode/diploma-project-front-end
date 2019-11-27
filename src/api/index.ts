import ApolloClient from 'apollo-boost'

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:3001',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})
