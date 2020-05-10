import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IChatState } from './types'
import {
  getChatsAction,
  getMessagesAction,
  onClearChatAction,
  onNextChatsAction,
  onNextMessageAction,
  onSelectChatAction,
  sendMessageAction
} from './actions'

export const reducer = reducerWithInitialState<IChatState>(initialState)
  .case(onSelectChatAction, (state, payload) => ({
    ...state,
    interlocutorId: payload.interlocutorId
  }))
  .case(onClearChatAction, state => ({
    ...state,
    interlocutorId: initialState.interlocutorId,
    messages: initialState.messages
  }))
  .case(getChatsAction.started, state => ({
    ...state,
    isLoading: true
  }))
  .case(getChatsAction.done, (state, payload) => ({
    ...state,
    isLoading: false,
    chats: payload.result.chats
  }))
  .case(getChatsAction.failed, state => ({
    ...state,
    isLoading: false
  }))
  .case(getMessagesAction.started, state => ({
    ...state,
    isMessagesLoading: true
  }))
  .case(getMessagesAction.done, (state, payload) => ({
    ...state,
    isMessagesLoading: false,
    messages: payload.result.messages
  }))
  .case(getMessagesAction.failed, state => ({
    ...state,
    isMessagesLoading: false
  }))
  .case(sendMessageAction.started, state => ({
    ...state,
    isMessageSending: true
  }))
  .case(sendMessageAction.done, state => ({
    ...state,
    isMessageSending: false
  }))
  .case(sendMessageAction.failed, state => ({
    ...state,
    isMessageSending: false
  }))
  .case(onNextMessageAction, (state, payload) => ({
    ...state,
    messages: state.messages.some(message => message.id === payload.message.id)
      ? state.messages.map(message =>
          message.id === payload.message.id
            ? payload.message
            : payload.message.isRead
            ? { ...message, isRead: true }
            : message
        )
      : [...state.messages, payload.message]
  }))
  .case(onNextChatsAction, (state, payload) => ({
    ...state,
    chats: payload.chats.map(chat =>
      chat.interlocutor.id === state.interlocutorId
        ? { ...chat, unreadCount: 0 }
        : chat
    )
  }))
