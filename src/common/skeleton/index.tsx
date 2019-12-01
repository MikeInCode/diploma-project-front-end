import React from 'react'
import { Skeleton as MuiSkeleton, SkeletonProps } from '@material-ui/lab'
import { useSkeletonClasses } from './styles'

export const Skeleton = React.memo<SkeletonProps>(props => {
  const classes = useSkeletonClasses({})
  return <MuiSkeleton classes={classes} {...props} />
})
