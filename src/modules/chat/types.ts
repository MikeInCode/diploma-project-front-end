import { GetChats_chats, GetMessages_messages } from 'graphQLTypes'

export interface IChatState {
  interlocutorId: string
  isLoading: boolean
  chats: GetChats_chats[]
  isMessagesLoading: boolean
  messages: GetMessages_messages[]
  isMessageSending: boolean
}
