import React from 'react'
import { ChatListItem } from './chatListItem'
import { Divider } from '@material-ui/core'
import { onSelectChatAction } from 'modules/chat'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useChatListStyles } from './styles'
import { getChatMessageDate } from 'utils/getMessageDate'
import { useTranslation } from 'react-i18next'

const mapState = ({ chat: { interlocutorId, chats } }: IRootReducer) => ({
  interlocutorId,
  chats
})

const ChatListComponent = () => {
  const { i18n } = useTranslation()

  const styles = useChatListStyles({})

  const { interlocutorId, chats } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const handleChatClick = React.useCallback(
    (interlocutorId: string) => () => {
      dispatch(onSelectChatAction({ interlocutorId }))
    },
    [dispatch]
  )

  return (
    <div className={styles.root}>
      {chats.map(chat => (
        <div key={chat.id}>
          <ChatListItem
            image={chat.interlocutor.image}
            lastName={chat.interlocutor.lastName}
            firstName={chat.interlocutor.firstName}
            text={chat.lastMessage?.text || ''}
            date={
              chat.lastMessage?.date
                ? getChatMessageDate(
                    new Date(chat.lastMessage.date),
                    i18n.language
                  )
                : null
            }
            unreadCount={chat.unreadCount}
            selected={chat.interlocutor.id === interlocutorId}
            onClick={handleChatClick(chat.interlocutor.id)}
          />
          <Divider />
        </div>
      ))}
    </div>
  )
}

export const ChatList = React.memo(ChatListComponent)
