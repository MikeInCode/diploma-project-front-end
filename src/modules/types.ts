import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IProfileState } from './profile'
import { IHomeState } from './home'
import { IStudentsState } from './students'
import { ITeachersState } from './teachers'
import { IDrawerState } from './drawer'
import { IUniversityState } from './university'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  profile: IProfileState
  home: IHomeState
  students: IStudentsState
  teachers: ITeachersState
  drawer: IDrawerState
  university: IUniversityState
}
