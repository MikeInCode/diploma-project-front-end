import { IBaseDrawerProps } from '../types'
import { GetProfile_profile } from '../../../../graphQLTypes'

export interface IProfileDrawerProps extends IBaseDrawerProps {
  profile: GetProfile_profile
}
