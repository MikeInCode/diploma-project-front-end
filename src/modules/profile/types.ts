import { GetProfile_profile } from '../../graphQLTypes'
import { IProfileFormValues } from '../../components/forms/profileForm/types'

export interface IProfileState {
  user: GetProfile_profile
  isLoading: boolean
  isProfileUpdating: boolean
}

export interface IUpdateUserTypes extends IProfileFormValues {
  id: string
}
