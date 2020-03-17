export interface IProfileFormValues {
  image: string
  lastName: string
  firstName: string
  patronymicName: string
  phone: string
  email: string
  institute: string
  department: string
  speciality: string
  group: string
}

export interface IProfileFormProps {
  initialValues: IProfileFormValues
  onSubmit: (values: IProfileFormValues) => void
  isProfileUpdating: boolean
}
