import { apolloClient } from '../index'
import {
  GetMessagesVariables,
  SendMessageVariables,
  StartChatVariables
} from 'graphQLTypes'

import { loader } from 'graphql.macro'

const getChatsGraphql = loader('./getChats.graphql')
const getMessagesGraphql = loader('./getMessages.graphql')
const startChatGraphql = loader('./startChat.graphql')
const sendMessageGraphql = loader('./sendMessage.graphql')

export const ChatService = {
  getChats: () => apolloClient.query({ query: getChatsGraphql }),
  getMessages: (variables: GetMessagesVariables) =>
    apolloClient.query({ variables, query: getMessagesGraphql }),
  startChat: (variables: StartChatVariables) =>
    apolloClient.mutate({ variables, mutation: startChatGraphql }),
  sendMessage: (variables: SendMessageVariables) =>
    apolloClient.mutate({ variables, mutation: sendMessageGraphql })
}
