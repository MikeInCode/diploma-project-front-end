import React from 'react'
import { Avatar as MuiAvatar } from '@material-ui/core'
import { IAvatarProps } from './types'
import { getUserInitials } from 'utils/getUserInitials'
import { useAvatarClasses } from './styles'

export const Avatar = React.memo<IAvatarProps>(
  ({ firstName, lastName, src, ...rest }) => {
    const classes = useAvatarClasses({})
    return (
      <MuiAvatar
        {...rest}
        alt={`${firstName} ${lastName}`}
        src={src}
        classes={classes}
      >
        {getUserInitials(firstName, lastName)}
      </MuiAvatar>
    )
  }
)
