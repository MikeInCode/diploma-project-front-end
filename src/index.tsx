import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './api'
import Home from './containers/home'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
