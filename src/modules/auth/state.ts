import { IAuthState } from './types'

export const initialState: IAuthState = {
  isLoading: false,
  user: null,
  isInvalidCredentials: false
}
