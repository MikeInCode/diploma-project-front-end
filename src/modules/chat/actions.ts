import actionCreatorFactory from 'typescript-fsa'
import {
  ChatsSubscription,
  GetChats,
  GetMessages,
  GetMessagesVariables,
  MessageSubscription,
  MessageSubscriptionVariables,
  ReadAllMessages,
  ReadAllMessagesVariables,
  SendMessage,
  SendMessageVariables
} from 'graphQLTypes'

const actionCreator = actionCreatorFactory('chat')

export const onSelectChatAction = actionCreator<MessageSubscriptionVariables>(
  'ON_SELECT_CHAT'
)

export const onClearChatAction = actionCreator('ON_CLEAR_CHAT')

export const getChatsAction = actionCreator.async<void, GetChats, Error>(
  'GET_CHATS'
)

export const getMessagesAction = actionCreator.async<
  GetMessagesVariables,
  GetMessages,
  Error
>('GET_MESSAGES')

export const sendMessageAction = actionCreator.async<
  SendMessageVariables,
  SendMessage,
  Error
>('SEND_MESSAGE')

export const readAllMessages = actionCreator.async<
  ReadAllMessagesVariables,
  ReadAllMessages,
  Error
>('READ_ALL_MESSAGE')

export const onNextMessageAction = actionCreator<MessageSubscription>(
  'ON_NEXT_MESSAGE'
)

export const subscribeOnChatsAction = actionCreator('SUBSCRIBE_ON_CHATS')

export const onNextChatsAction = actionCreator<ChatsSubscription>(
  'ON_NEXT_CHATS'
)
