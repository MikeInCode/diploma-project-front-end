import * as Yup from 'yup'
import { IProfileFormValues } from './types'
import {
  CourseEnum,
  GetProfile_profile,
  RolesEnum
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
  course: user?.course || ('' as CourseEnum)
})

export const validationSchema = (userRole: RolesEnum) =>
  Yup.object<Partial<IProfileFormValues>>({
    lastName: Yup.string().required('Required field'),
    firstName: Yup.string().required('Required field'),
    patronymicName: Yup.string().required('Required field'),
    email: Yup.string().email('Invalid email'),
    institute: Yup.string().required('Required field'),
    department:
      userRole !== RolesEnum.ADMIN
        ? Yup.string().required('Required field')
        : Yup.string().notRequired(),
    speciality:
      userRole === RolesEnum.STUDENT
        ? Yup.string().required('Required field')
        : Yup.string().notRequired(),
    group:
      userRole === RolesEnum.STUDENT
        ? Yup.string().required('Required field')
        : Yup.string().notRequired(),
    course:
      userRole === RolesEnum.STUDENT
        ? Yup.mixed().required('Required field')
        : Yup.string().notRequired()
  })
