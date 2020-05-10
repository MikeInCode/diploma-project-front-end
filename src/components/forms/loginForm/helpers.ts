import { ILoginFormValues } from './types'
import * as Yup from 'yup'
import { TFunction } from 'i18next'

export const defaultValues: ILoginFormValues = {
  username: '',
  password: ''
}

export const validationSchema = (t: TFunction) =>
  Yup.object<ILoginFormValues>({
    username: Yup.string().required(t('requiredFieldLabel')),
    password: Yup.string().required(t('requiredFieldLabel'))
  })
