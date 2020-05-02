import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  getChatsAction,
  getMessagesAction,
  onChangeSelectedChatAction,
  onStartChatAction,
  sendMessageAction
} from './actions'
import { ChatService } from 'api/chat'
import { ApolloQueryResult } from 'apollo-client'
import {
  GetChats,
  GetMessages,
  GetMessagesVariables,
  SendMessage,
  SendMessageVariables,
  StartChat,
  StartChatVariables
} from 'graphQLTypes'
import { Action } from 'typescript-fsa'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'

function* getChatsSaga() {
  try {
    const response: ApolloQueryResult<GetChats> = yield call(
      ChatService.getChats
    )
    const result = response.data
    yield put(getChatsAction.done({ result }))
  } catch (error) {
    yield put(getChatsAction.failed({ error }))
  }
}

function* getMessagesSaga(action: Action<GetMessagesVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<GetMessages> = yield call(
      ChatService.getMessages,
      params
    )
    const result = response.data
    yield put(getMessagesAction.done({ params, result }))
  } catch (error) {
    yield put(getMessagesAction.failed({ params, error }))
  }
}

function* onStartChatActionSaga(action: Action<StartChatVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<StartChat> = yield call(
      ChatService.startChat,
      params
    )
    const result = response.data
    yield put(onStartChatAction.done({ params, result }))
    yield put(onChangeSelectedChatAction({ id: result.startChat }))
    yield put(push(ROUTES.CHAT))
  } catch (error) {
    yield put(onStartChatAction.failed({ params, error }))
  }
}

function* sendMessageSaga(action: Action<SendMessageVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<SendMessage> = yield call(
      ChatService.sendMessage,
      params
    )
    const result = response.data
    yield put(sendMessageAction.done({ params, result }))
  } catch (error) {
    yield put(sendMessageAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(getChatsAction.started, getChatsSaga),
    takeLatest(getMessagesAction.started, getMessagesSaga),
    takeLatest(onStartChatAction.started, onStartChatActionSaga),
    takeLatest(sendMessageAction.started, sendMessageSaga)
  ])
}
