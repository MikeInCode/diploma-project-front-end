import React from 'react'
import ReactSelect from 'react-select'
import { ISelectProps } from './types'
import { selectStyles } from './styles'
import { Option } from './components'

export const Select = React.memo<ISelectProps>(({ error, ...rest }) => (
  <ReactSelect styles={selectStyles(error)} components={{ Option }} {...rest} />
))
