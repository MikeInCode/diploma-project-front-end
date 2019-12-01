import React from 'react'
import { CircularProgress as MuiCircularProgress } from '@material-ui/core'
import { CircularProgressProps } from '@material-ui/core/CircularProgress'
import { useCircularProgressClasses } from './styles'

export const CircularProgress = React.memo<CircularProgressProps>(props => {
  const classes = useCircularProgressClasses({})
  return <MuiCircularProgress classes={classes} {...props} />
})
