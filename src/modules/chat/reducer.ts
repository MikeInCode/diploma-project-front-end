import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from './state'
import { IChatState } from './types'
import {
  getChatsAction,
  getMessagesAction,
  onChangeSelectedChatAction,
  sendMessageAction
} from './actions'

export const reducer = reducerWithInitialState<IChatState>(initialState)
  .case(onChangeSelectedChatAction, (state, payload) => ({
    ...state,
    selectedChatId: payload.id
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
  .case(sendMessageAction.done, (state, payload) => ({
    ...state,
    isMessageSending: false,
    messages: [...state.messages, payload.result.sendMessage]
  }))
  .case(sendMessageAction.failed, state => ({
    ...state,
    isMessageSending: false
  }))
