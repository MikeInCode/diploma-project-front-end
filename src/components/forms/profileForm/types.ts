import { CourseEnum, RolesEnum } from '../../../graphQLTypes'

export interface IProfileFormValues {
  image: string
  lastName: string
  firstName: string
  patronymicName: string
  username: string
  email: string
  phone: string
  telegram: string
  institute: string
  department: string
  speciality: string
  group: string
  course: CourseEnum
}

export interface IProfileFormProps {
  initialValues: IProfileFormValues
  onSubmit: (values: IProfileFormValues) => void
  isProfileUpdating: boolean
  userRole: RolesEnum
}
