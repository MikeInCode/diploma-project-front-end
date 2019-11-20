import React from 'react'
import { Typography as MuiTypography } from '@material-ui/core'
import { TypographyProps } from '@material-ui/core/Typography'
import { useTypographyClasses } from './styles'

export const Typography = React.memo<TypographyProps>(props => {
  const classes = useTypographyClasses({})
  return <MuiTypography classes={classes} {...props} />
})
