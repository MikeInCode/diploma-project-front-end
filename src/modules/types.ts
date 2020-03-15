import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IHomeState } from './home'
import { IStudentsState } from './students'
import { ITeachersState } from './teachers'
import { IDrawerState } from './drawer'
import { IUniversityState } from './university'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  home: IHomeState
  students: IStudentsState
  teachers: ITeachersState
  drawer: IDrawerState
  university: IUniversityState
}
