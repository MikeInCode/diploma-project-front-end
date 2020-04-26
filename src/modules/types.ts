import { RouterState } from 'connected-react-router'
import { IAuthState } from './auth'
import { IProfileState } from './profile'
import { IStudentsState } from './students'
import { ITeachersState } from './teachers'
import { IDrawerState } from './drawer'
import { IUniversityState } from './university'
import { IScheduleState } from './schedule'
import { ISubjectsState } from './subjects'

export interface IRootReducer {
  router: RouterState
  auth: IAuthState
  profile: IProfileState
  students: IStudentsState
  teachers: ITeachersState
  drawer: IDrawerState
  university: IUniversityState
  schedule: IScheduleState
  subjects: ISubjectsState
}
