import React from 'react'
import { LinearProgress as MuiLinearProgress } from '@material-ui/core'
import { LinearProgressProps } from '@material-ui/core/LinearProgress'
import { useLinearProgressClasses } from './styles'

export const LinearProgress = React.memo<LinearProgressProps>(props => {
  const classes = useLinearProgressClasses({})
  return <MuiLinearProgress classes={classes} {...props} />
})
