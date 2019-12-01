import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import { history } from '../router/history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import { IRootReducer } from './types'
import { initialState } from './auth'
import { getToken } from '../utils/token'

const sagaMiddleware = createSagaMiddleware()

const preloadedState: Partial<IRootReducer> = {
  auth: {
    ...initialState,
    isAuthenticated: !!getToken()
  }
}

export const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)
