import { GetChats_chats, GetMessages_messages } from 'graphQLTypes'

export interface IChatState {
  selectedChatId: string
  isLoading: boolean
  chats: GetChats_chats[]
  isMessagesLoading: boolean
  messages: GetMessages_messages[]
  isMessageSending: boolean
}

export interface IOnChangeSelectedChatType {
  id: string
}
