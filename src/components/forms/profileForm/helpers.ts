import * as Yup from 'yup'
import { IProfileFormValues } from './types'
import { GetProfile_profile, RolesEnum } from '../../../graphQLTypes'
import { courseDictionary } from '../../../dictionary'
import { TFunction } from 'i18next'

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
  course: courseDictionary[user?.course]
})

export const validationSchema = (userRole: RolesEnum, t: TFunction) =>
  Yup.object<Partial<IProfileFormValues>>({
    lastName: Yup.string().required(t('requiredFieldLabel')),
    firstName: Yup.string().required(t('requiredFieldLabel')),
    patronymicName: Yup.string().required(t('requiredFieldLabel')),
    email: Yup.string().email(t('invalidEmailLabel')),
    institute: Yup.string().required(t('requiredFieldLabel')),
    department:
      userRole === RolesEnum.TEACHER
        ? Yup.string().required(t('requiredFieldLabel'))
        : Yup.string().notRequired(),
    speciality:
      userRole === RolesEnum.STUDENT
        ? Yup.string().required(t('requiredFieldLabel'))
        : Yup.string().notRequired(),
    group:
      userRole === RolesEnum.STUDENT
        ? Yup.string().required(t('requiredFieldLabel'))
        : Yup.string().notRequired()
  })
