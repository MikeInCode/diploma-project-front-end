export interface FormValues {
  email: string
  password: string
}

export interface ILoginFormProps {
  onSubmit: (values: FormValues) => void
  isLoading: boolean
  isInvalidCredentials: boolean
}
