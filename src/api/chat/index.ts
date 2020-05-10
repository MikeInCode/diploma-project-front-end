import { apolloClient } from '../index'
import {
  GetMessagesVariables,
  MessageSubscriptionVariables,
  ReadAllMessagesVariables,
  SendMessageVariables
} from 'graphQLTypes'

import { loader } from 'graphql.macro'

const getChatsGraphql = loader('./getChats.graphql')
const getMessagesGraphql = loader('./getMessages.graphql')
const sendMessageGraphql = loader('./sendMessage.graphql')
const readAllMessagesGraphql = loader('./readAllMessages.graphql')
const messageSubscriptionGraphql = loader('./messageSubscription.graphql')
const chatsSubscriptionGraphql = loader('./chatsSubscription.graphql')

export const ChatService = {
  getChats: () => apolloClient.query({ query: getChatsGraphql }),
  getMessages: (variables: GetMessagesVariables) =>
    apolloClient.query({ variables, query: getMessagesGraphql }),
  sendMessage: (variables: SendMessageVariables) =>
    apolloClient.mutate({ variables, mutation: sendMessageGraphql }),
  readAllMessages: (variables: ReadAllMessagesVariables) =>
    apolloClient.mutate({ variables, mutation: readAllMessagesGraphql }),
  messageSubscription: (variables: MessageSubscriptionVariables) =>
    apolloClient.subscribe({ variables, query: messageSubscriptionGraphql }),
  chatsSubscription: () =>
    apolloClient.subscribe({ query: chatsSubscriptionGraphql })
}
