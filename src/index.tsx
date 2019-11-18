import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './api'
import { AppRouter } from './router'
import { history } from './router/history'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <AppRouter history={history} />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
