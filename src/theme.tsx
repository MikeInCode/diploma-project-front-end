import React from 'react'
import { withStyles, CssBaseline } from '@material-ui/core'

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

  Black: '#000'
}

export const GlobalCss = withStyles({
  '@global': {
    '#root': {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }
})(() => <CssBaseline />)
