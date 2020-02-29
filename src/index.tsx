import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './modules'
import { AppRouter } from './router'
import { history } from './router/history'
import { GlobalCss, theme } from './theme'
import { ThemeProvider } from '@material-ui/core'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <AppRouter history={history} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
