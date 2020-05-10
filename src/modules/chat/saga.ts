import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import {
  getChatsAction,
  getMessagesAction,
  onClearChatAction,
  onNextChatsAction,
  onNextMessageAction,
  onSelectChatAction,
  readAllMessages,
  sendMessageAction,
  subscribeOnChatsAction
} from './actions'
import { ChatService } from 'api/chat'
import { ApolloQueryResult } from 'apollo-client'
import {
  ChatsSubscription,
  GetChats,
  GetMessages,
  GetMessagesVariables,
  MessageSubscription,
  MessageSubscriptionVariables,
  ReadAllMessages,
  ReadAllMessagesVariables,
  SendMessage,
  SendMessageVariables
} from 'graphQLTypes'
import { Action } from 'typescript-fsa'
import { FetchResult } from 'apollo-link'
import { onLogoutAction } from '../auth'
import { IRootReducer } from '../types'

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
    if (
      result.messages.some(
        message =>
          message.sender.id === params.interlocutorId && !message.isRead
      )
    ) {
      yield put(readAllMessages.started(params))
    }
  } catch (error) {
    yield put(getMessagesAction.failed({ params, error }))
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

function* readAllMessagesSaga(action: Action<ReadAllMessagesVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<ReadAllMessages> = yield call(
      ChatService.readAllMessages,
      params
    )
    const result = response.data
    yield put(readAllMessages.done({ params, result }))
  } catch (error) {
    yield put(readAllMessages.failed({ params, error }))
  }
}

const messageChannel = (interlocutorId: string) =>
  eventChannel(emitter => {
    const observable = ChatService.messageSubscription({ interlocutorId })
    const subscription = observable.subscribe({
      next(value: FetchResult<MessageSubscription>): void {
        emitter(value.data)
      }
    })
    return () => subscription.unsubscribe()
  })

function* onNextMessageSaga(payload: MessageSubscription) {
  yield put(onNextMessageAction(payload))
  const interlocutorId = yield select(
    ({ chat: { interlocutorId } }: IRootReducer) => interlocutorId
  )
  if (payload.message.sender.id === interlocutorId && !payload.message.isRead) {
    yield put(
      readAllMessages.started({ interlocutorId: payload.message.sender.id })
    )
  }
}

function* configureMessageChannel(
  action: Action<MessageSubscriptionVariables>
) {
  try {
    const channel = yield call(messageChannel, action.payload.interlocutorId)
    yield takeEvery(channel, onNextMessageSaga)
    yield takeEvery([onClearChatAction, onLogoutAction], () => channel.close())
  } catch (error) {
    console.warn(error)
  }
}

const chatsChannel = () =>
  eventChannel(emitter => {
    const observable = ChatService.chatsSubscription()
    const subscription = observable.subscribe({
      next(value: FetchResult<ChatsSubscription>): void {
        emitter(value.data)
      }
    })
    return () => subscription.unsubscribe()
  })

function* onNextChatsSaga(payload: ChatsSubscription) {
  yield put(onNextChatsAction(payload))
}

function* configureChatsChannel() {
  try {
    const channel = yield call(chatsChannel)
    yield takeEvery(channel, onNextChatsSaga)
    yield takeEvery(onLogoutAction, () => channel.close())
  } catch (error) {
    console.warn(error)
  }
}

export function* saga() {
  yield all([
    takeLatest(getChatsAction.started, getChatsSaga),
    takeLatest(getMessagesAction.started, getMessagesSaga),
    takeLatest(sendMessageAction.started, sendMessageSaga),
    takeLatest(readAllMessages.started, readAllMessagesSaga),
    takeLatest(onSelectChatAction, configureMessageChannel),
    takeLatest(subscribeOnChatsAction, configureChatsChannel)
  ])
}
