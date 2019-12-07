import * as Yup from 'yup'
import { FormValues } from './types'
import { GetProfile_profile } from '../../../graphQLTypes'

export const getInitialValues: (user: GetProfile_profile) => FormValues = ({
  email,
  firstName,
  lastName
}) => ({
  firstName,
  lastName,
  phone: '',
  specialty: '',
  email,
  course: '',
  telegram: '',
  group: ''
})

export const validationSchema = Yup.object<Partial<FormValues>>({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  email: Yup.string()
    .required('Required field')
    .email('Invalid email')
})
