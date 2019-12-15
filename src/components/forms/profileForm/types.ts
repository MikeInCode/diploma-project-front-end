import { GetProfile_profile } from '../../../graphQLTypes'
import { IOptionType } from '../../select/types'

export interface FormValues {
  firstName: string
  lastName: string
  phone: string
  specialty: IOptionType
  email: string
  course: IOptionType
  telegram: string
  group: IOptionType
}

export interface IProfileFormProps {
  user: GetProfile_profile
  onSubmit: (values: FormValues) => void
  isProfileUpdating: boolean
  specialities: IProfileSelectType
  courses: IProfileSelectType
  groups: IProfileSelectType
}

export interface IProfileSelectType {
  options: any[] // TODO: mocked
  isLoading: boolean
  onStartFetching: () => void
}
