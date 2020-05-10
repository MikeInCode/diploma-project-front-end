import { IChatState } from './types'

export const initialState: IChatState = {
  interlocutorId: null,
  isLoading: false,
  chats: [],
  isMessagesLoading: false,
  messages: [],
  isMessageSending: false
}
