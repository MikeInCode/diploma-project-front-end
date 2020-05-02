import React from 'react'
import {
  createMuiTheme,
  CssBaseline,
  PaletteType,
  withStyles
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

export const GlobalCss = withStyles({
  '@global': {
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }
})(() => <CssBaseline />)

export const getMuiTheme = (type: PaletteType) =>
  createMuiTheme({
    palette: {
      primary: {
        main: green['600']
      },
      type: type === 'dark' ? 'dark' : 'light'
    },
    overrides: {
      MuiTypography: {
        root: {
          lineHeight: 'normal !important'
        }
      }
    }
  })
