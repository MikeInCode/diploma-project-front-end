import actionCreatorFactory from 'typescript-fsa'
import { IOnChangeSelectedChatType } from './types'
import {
  GetChats,
  GetMessages,
  GetMessagesVariables,
  SendMessage,
  SendMessageVariables,
  StartChat,
  StartChatVariables
} from 'graphQLTypes'

const actionCreator = actionCreatorFactory('chat')

export const onChangeSelectedChatAction = actionCreator<
  IOnChangeSelectedChatType
>('ON_CHANGE_SELECTED_CHAT')

export const getChatsAction = actionCreator.async<void, GetChats, Error>(
  'GET_CHATS'
)

export const getMessagesAction = actionCreator.async<
  GetMessagesVariables,
  GetMessages,
  Error
>('GET_MESSAGES')

export const onStartChatAction = actionCreator.async<
  StartChatVariables,
  StartChat,
  Error
>('ON_START_CHAT')

export const sendMessageAction = actionCreator.async<
  SendMessageVariables,
  SendMessage,
  Error
>('SEND_MESSAGE')
