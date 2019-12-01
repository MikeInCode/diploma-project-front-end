import { IAuthState } from './types'

export const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  isInvalidCredentials: false
}
