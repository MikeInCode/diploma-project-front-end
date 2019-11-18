import { RouterState } from 'connected-react-router'
import { IHomeState } from './home'

export interface IRootReducer {
  router: RouterState
  home: IHomeState
}
