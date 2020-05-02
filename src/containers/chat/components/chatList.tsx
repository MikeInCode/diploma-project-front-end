import React from 'react'
import { ChatListItem } from './chatListItem'
import { Divider } from '@material-ui/core'
import { onChangeSelectedChatAction } from 'modules/chat'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useChatListStyles } from './styles'
import { getChatMessageDate } from 'utils/getMessageDate'
import { useTranslation } from 'react-i18next'

const mapState = ({ chat: { selectedChatId, chats } }: IRootReducer) => ({
  selectedChatId,
  chats
})

export const ChatList = React.memo(() => {
  const { i18n } = useTranslation()

  const styles = useChatListStyles({})

  const { selectedChatId, chats } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const handleChatClick = React.useCallback(
    (id: string) => () => {
      dispatch(onChangeSelectedChatAction({ id }))
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
            selected={chat.id === selectedChatId}
            onClick={handleChatClick(chat.id)}
          />
          <Divider />
        </div>
      ))}
    </div>
  )
})
