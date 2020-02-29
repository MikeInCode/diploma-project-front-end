import { ILoginFormValues } from './types'
import * as Yup from 'yup'

export const validationSchema = Yup.object<ILoginFormValues>({
  email: Yup.string()
    .required('Required field')
    .email('Invalid email'),
  password: Yup.string().required('Required field')
})
