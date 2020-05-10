import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Avatar } from 'common/avatar'
import { IChatListItemProps } from './types'
import { useChatListItemStyles } from './styles'

export const ChatListItem = React.memo<IChatListItemProps>(
  ({
    image,
    lastName,
    firstName,
    text,
    date,
    unreadCount,
    selected,
    onClick
  }) => {
    const styles = useChatListItemStyles({})
    return (
      <ListItem
        className={styles.root}
        button={true}
        selected={selected}
        onClick={selected ? null : onClick}
      >
        <ListItemAvatar>
          <Avatar src={image} firstName={firstName} lastName={lastName} />
        </ListItemAvatar>
        <ListItemText
          className={styles.listItemText}
          primary={`${lastName} ${firstName}`}
          secondary={text}
        />
        <div className={styles.date}>
          {!!date && <Typography variant="body2">{date}</Typography>}
          {!!unreadCount && (
            <span className={styles.unreadCount}>{unreadCount}</span>
          )}
        </div>
      </ListItem>
    )
  }
)
