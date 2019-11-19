import { FormValues } from './types'
import * as Yup from 'yup'

export const initialValues: FormValues = {
  login: '',
  password: ''
}

export const validationSchema = Yup.object<FormValues>({
  login: Yup.string().required('Required field'),
  password: Yup.string().required('Required field')
})
