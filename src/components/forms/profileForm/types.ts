import { GetProfile_profile } from '../../../graphQLTypes'

export interface FormValues {
  firstName: string
  lastName: string
  phone: string
  specialty: string
  email: string
  course: string
  telegram: string
  group: string
}

export interface IProfileFormProps {
  user: GetProfile_profile
  onSubmit: (values: FormValues) => void
  isProfileUpdating: boolean
}
