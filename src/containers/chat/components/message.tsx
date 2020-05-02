import React from 'react'
import { IMessageProps } from './types'
import { useMessageStyles } from './styles'
import { Avatar } from 'common/avatar'
import { Typography } from '@material-ui/core'

export const Message = React.memo<IMessageProps>(
  ({ image, lastName, firstName, text, time, isIncoming }) => {
    const styles = useMessageStyles({ isIncoming })
    return (
      <div className={styles.root}>
        <Avatar src={image} firstName={firstName} lastName={lastName} />
        <div className={styles.message}>
          <Typography>{text}</Typography>
          <Typography variant="caption">{time}</Typography>
        </div>
      </div>
    )
  }
)
