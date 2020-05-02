import { IChatState } from './types'

export const initialState: IChatState = {
  selectedChatId: '',
  isLoading: false,
  chats: [],
  isMessagesLoading: false,
  messages: [],
  isMessageSending: false
}
