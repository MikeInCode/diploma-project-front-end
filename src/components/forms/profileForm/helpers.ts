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
  specialty: null,
  email,
  course: null,
  telegram: '',
  group: null
})

export const validationSchema = Yup.object<Partial<FormValues>>({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  phone: Yup.mixed().required('Required field'),
  specialty: Yup.mixed().required('Required field'),
  email: Yup.string()
    .required('Required field')
    .email('Invalid email'),
  course: Yup.mixed().required('Required field'),
  telegram: Yup.string().required('Required field'),
  group: Yup.mixed().required('Required field')
})
