import { IInputProps } from '../input/types'

export interface IFormikInputProps<T> extends Omit<IInputProps, 'name'> {
  name: keyof T
}
