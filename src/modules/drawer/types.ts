import { DrawerEnum } from '../../enums'

export interface IDrawerState {
  opened: IDrawerType
}

export interface IDrawerType {
  type: DrawerEnum
  data?: any
}
