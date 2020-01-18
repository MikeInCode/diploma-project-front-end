import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IHomeState } from './home'
import { IStudentsState } from './students'
import { ITeachersState } from './teachers'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  home: IHomeState
  students: IStudentsState
  teachers: ITeachersState
}
