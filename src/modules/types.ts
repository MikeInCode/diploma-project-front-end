import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IHomeState } from './home'
import { IUserState } from './user'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  home: IHomeState
  user: IUserState
}
