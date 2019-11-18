import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import { history } from '../router/history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)
