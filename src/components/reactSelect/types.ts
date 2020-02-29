import { Props } from 'react-select'

export interface ISelectProps extends Props<IOptionType> {
  error?: boolean
}

export interface IOptionType {
  value: string
  label: string
}
