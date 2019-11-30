import { UserMe_userMe } from '../../graphQLTypes'

export interface IAuthState {
  isLoading: boolean
  user: UserMe_userMe
  isInvalidCredentials: boolean
}
