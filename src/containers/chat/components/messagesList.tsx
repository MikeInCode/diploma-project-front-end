import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { isSameDay } from 'date-fns'
import { Message } from './message'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMessagesListStyles } from './styles'
import { useUpdateEffect } from 'react-use'
import { getMessagesAction } from 'modules/chat'
import { getMessageDate, getMessageSendTime } from 'utils/getMessageDate'
import { useTranslation } from 'react-i18next'

const mapState = ({
  auth: { user },
  chat: { interlocutorId, isMessagesLoading, messages }
}: IRootReducer) => ({
  user,
  interlocutorId,
  isMessagesLoading,
  messages
})

export const MessagesListComponent = () => {
  const { i18n } = useTranslation()

  const styles = useMessagesListStyles({})

  const { user, interlocutorId, isMessagesLoading, messages } = useSelector(
    mapState,
    shallowEqual
  )

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (interlocutorId) {
      dispatch(getMessagesAction.started({ interlocutorId }))
    }
  }, [dispatch, interlocutorId])

  const lastMessageRef = React.useRef<HTMLDivElement>()

  useUpdateEffect(() => {
    lastMessageRef.current?.scrollIntoView(false)
  }, [messages])

  return isMessagesLoading ? (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  ) : (
    <div className={styles.messagesList}>
      {messages.map((message, index, array) => (
        <React.Fragment key={message.id}>
          {(index === 0 ||
            !isSameDay(
              new Date(message.date),
              new Date(array[index - 1].date)
            )) && (
            <div className={styles.messagesDateLabel}>
              {getMessageDate(new Date(message.date), i18n.language)}
            </div>
          )}
          <div
            {...(index === array.length - 1 ? { ref: lastMessageRef } : {})}
            className={styles.messageContainer}
          >
            <Message
              image={message.sender.image}
              lastName={message.sender.lastName}
              firstName={message.sender.firstName}
              text={message.text}
              time={getMessageSendTime(new Date(message.date))}
              isIncoming={message.sender.id !== user?.id}
              isRead={message.isRead}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export const MessagesList = React.memo(MessagesListComponent)
