export interface ILoginFormValues {
  email: string
  password: string
}

export interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => void
  isLoading: boolean
  isInvalidCredentials: boolean
}
