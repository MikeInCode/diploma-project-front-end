import { FormValues } from './types'
import { UpdateProfileVariables } from '../../../graphQLTypes'

export const getVariables: (values: FormValues) => UpdateProfileVariables = ({
  firstName,
  lastName,
  email
}) => ({
  input: { firstName, lastName, email }
})
