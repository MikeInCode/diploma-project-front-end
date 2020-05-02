import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'modules'
import { AppRouter } from 'router'
import { history } from './router/history'
import { getMuiTheme, GlobalCss } from './theme'
import { PaletteType, ThemeProvider } from '@material-ui/core'
import { useLocalStorage } from 'react-use'
import './i18n'

export const ThemeSwitcherContext = React.createContext(null)
export const ThemeSwitcherProvider = ThemeSwitcherContext.Provider

const App = () => {
  const [theme, setTheme] = useLocalStorage<PaletteType>('theme', 'light', {
    raw: true
  })

  const handleThemeChange = React.useCallback(() => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'))
  }, [setTheme])

  return (
    <Provider store={store}>
      <ThemeSwitcherProvider value={handleThemeChange}>
        <ThemeProvider theme={getMuiTheme(theme)}>
          <GlobalCss />
          <AppRouter history={history} />
        </ThemeProvider>
      </ThemeSwitcherProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
