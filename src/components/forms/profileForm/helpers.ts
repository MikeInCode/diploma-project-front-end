import * as Yup from 'yup'
import { IProfileFormValues } from './types'
import {
  GetProfile_profile,
  UpdateProfileVariables
} from '../../../graphQLTypes'

export const adaptValuesToForm: (
  user: GetProfile_profile
) => IProfileFormValues = user => ({
  image: user?.image || '',
  lastName: user?.lastName || '',
  firstName: user?.firstName || '',
  patronymicName: user?.patronymicName || '',
  username: user?.username || '',
  email: user?.email || '',
  phone: user?.phone || '',
  telegram: 'todo',
  institute: user?.institute?.id || '',
  department: user?.department?.id || '',
  speciality: user?.speciality?.id || '',
  group: user?.group?.id || '',
  course: user?.course || null
})

export const adaptValuesToResponse: (
  values: IProfileFormValues
) => UpdateProfileVariables = values => ({
  input: {
    image: values.image,
    email: values.email,
    phone: values.phone
  }
})

export const validationSchema = Yup.object<Partial<IProfileFormValues>>({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  email: Yup.string()
    .required('Required field')
    .email('Invalid email')
})
