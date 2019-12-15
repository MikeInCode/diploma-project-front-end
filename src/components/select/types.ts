import { Props } from 'react-select'

export interface ISelectProps extends Props<IOptionType> {
  errorMessage?: string
}

export interface IOptionType {
  value: string
  label: string
}
