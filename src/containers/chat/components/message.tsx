import React from 'react'
import { IMessageProps } from './types'
import { useMessageStyles } from './styles'
import { Avatar } from 'common/avatar'
import { Typography } from '@material-ui/core'
import { Done, DoneAll } from '@material-ui/icons'

export const Message = React.memo<IMessageProps>(
  ({ image, lastName, firstName, text, time, isIncoming, isRead }) => {
    const styles = useMessageStyles({ isIncoming })
    return (
      <div className={styles.root}>
        <Avatar src={image} firstName={firstName} lastName={lastName} />
        <div className={styles.message}>
          <Typography>{text}</Typography>
          <div className={styles.time}>
            <Typography variant="caption">{time}</Typography>
            {!isIncoming ? (
              isRead ? (
                <DoneAll color="action" fontSize="small" />
              ) : (
                <Done color="action" fontSize="small" />
              )
            ) : null}
          </div>
        </div>
      </div>
    )
  }
)
