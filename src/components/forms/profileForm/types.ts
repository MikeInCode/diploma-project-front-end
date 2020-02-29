export interface IProfileFormValues {
  firstName: string
  lastName: string
  phone: string
  specialty: string
  email: string
  course: string
  telegram: string
  group: string
}

export interface IProfileFormProps {
  initialValues: IProfileFormValues
  onSubmit: (values: IProfileFormValues) => void
  isProfileUpdating: boolean
}
