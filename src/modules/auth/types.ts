import { Login_login_user } from '../../graphQLTypes'

export interface IAuthState {
  isAuthenticated: boolean
  user: Login_login_user
  isLoading: boolean
  isProfileUpdating: boolean
  isInvalidCredentials: boolean
}
