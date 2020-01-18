import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './api'
import { AppRouter } from './router'
import { history } from './router/history'
import { GlobalCss } from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <GlobalCss />
      <AppRouter history={history} />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
