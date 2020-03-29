import {
  GetAcademicUnits_academicUnits,
  GetProfile_profile
} from '../../../graphQLTypes'

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
  course: string
}

export interface IProfileFormProps {
  user: GetProfile_profile
  academicUnits: GetAcademicUnits_academicUnits
  onSubmit: (values: IProfileFormValues) => void
  isProfileUpdating: boolean
}
