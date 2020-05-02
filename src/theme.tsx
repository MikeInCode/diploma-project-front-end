import React from 'react'
import {
  createMuiTheme,
  CssBaseline,
  PaletteType,
  withStyles
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

export const Color = {
  Grey: '#aab7bd', // input border
  Grey1: '#f4f6f6', // input background
  Grey2: '#5b6367', // input text

  Skeleton: '#c9d5da', // input text

  Red: '#d5403a', // input error border
  Red1: '#fad5d5', // input error background

  Green: '#379c59', // button primary
  Green1: '#348747', // button primary hover
  Green2: 'rgba(126,219,160,0.60)', // button primary disabled
  Green3: 'rgba(52,135,71,0.60)', // button primary disabled text

  Black: '#000',
  White: '#fff'
}

export const GlobalCss = withStyles({
  '@global': {
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
    // '::-webkit-scrollbar': {
    //   width: SCROLL_WIDTH,
    //   height: SCROLL_HEIGHT
    // },
    // '::-webkit-scrollbar-thumb': {
    //   background: Color.Grey2
    // },
    // '::-webkit-scrollbar-track': {
    //   background: Color.Grey1
    // }
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
