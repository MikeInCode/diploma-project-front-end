export interface ILoginFormValues {
  username: string
  password: string
}

export interface ILoginFormProps {
  onSubmit: (values: ILoginFormValues) => void
  isLoading: boolean
  isInvalidCredentials: boolean
}
