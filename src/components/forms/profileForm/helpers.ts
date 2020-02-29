import * as Yup from 'yup'
import { IProfileFormValues } from './types'
import {
  GetProfile_profile,
  UpdateProfileVariables
} from '../../../graphQLTypes'

export const adaptValuesToForm: (
  user: GetProfile_profile
) => IProfileFormValues = user => ({
  firstName: user ? user.firstName : '',
  lastName: user ? user.lastName : '',
  phone: '',
  specialty: '',
  email: user ? user.email : '',
  course: '',
  telegram: '',
  group: '',
})

export const adaptValuesToResponse: (
  values: IProfileFormValues
) => UpdateProfileVariables = ({ firstName, lastName, email }) => ({
  input: { firstName, lastName, email }
})

export const validationSchema = Yup.object<Partial<IProfileFormValues>>({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  email: Yup.string()
    .required('Required field')
    .email('Invalid email')
})
