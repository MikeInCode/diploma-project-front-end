import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IHomeState } from './home'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  home: IHomeState
}
