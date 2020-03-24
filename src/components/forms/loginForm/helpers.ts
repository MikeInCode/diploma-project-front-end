import { ILoginFormValues } from './types'
import * as Yup from 'yup'

export const defaultValues: ILoginFormValues = {
  username: '',
  password: ''
}

export const validationSchema = Yup.object<ILoginFormValues>({
  username: Yup.string().required('Required field'),
  password: Yup.string().required('Required field')
})
