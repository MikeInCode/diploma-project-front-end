import React, { useContext } from 'react'
import { IconButton, useTheme } from '@material-ui/core'
import {
  Brightness4 as DarkTheme,
  Brightness7 as LightTheme
} from '@material-ui/icons'
import { ThemeSwitcherContext } from '../../../index'

export const ThemeButton = React.memo(() => {
  const theme = useTheme()

  const handleChange = useContext(ThemeSwitcherContext)

  return (
    <IconButton color="inherit" onClick={handleChange}>
      {theme.palette.type === 'light' ? <LightTheme /> : <DarkTheme />}
    </IconButton>
  )
})
