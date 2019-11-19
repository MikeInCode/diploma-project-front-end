import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { useButtonClasses } from './styles'
import { ButtonProps } from '@material-ui/core/Button'

export const Button = React.memo<ButtonProps>(props => {
  const classes = useButtonClasses({})
  return (
    <MuiButton
      classes={classes}
      variant="contained"
      color="primary"
      disableRipple={true}
      {...props}
    />
  )
})
