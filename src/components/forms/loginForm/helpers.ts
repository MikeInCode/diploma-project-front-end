import { FormValues } from './types'
import * as Yup from 'yup'

export const initialValues: FormValues = {
  email: '',
  password: ''
}

export const validationSchema = Yup.object<FormValues>({
  email: Yup.string()
    .required('Required field')
    .email('Invalid email'),
  password: Yup.string()
    .required('Required field')
    .min(8, 'Password should be at least 8 symbols')
})
