import { IInputProps } from '../input/types'
import { ISelectProps } from '../../components/select/types'

export interface IFormikInputProps<T> extends Omit<IInputProps, 'name'> {
  name: keyof T
}

export interface IFormikSelectProps<T> extends Omit<ISelectProps, 'name'> {
  name: keyof T
}
