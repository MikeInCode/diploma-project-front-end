import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules'
import { ApolloProvider } from '@apollo/react-hooks'
import { apolloClient } from './api'
import { AppRouter } from './router'
import { history } from './router/history'
import { GlobalCss, theme } from './theme'
import { ThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <AppRouter history={history} />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
