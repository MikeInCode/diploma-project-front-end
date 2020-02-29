import React from 'react'
import { OptionProps } from 'react-select'
import { IOptionType } from '../types'
import { MenuItem } from '@material-ui/core'

export const Option = React.memo<OptionProps<IOptionType>>(
  ({ innerRef, innerProps, children }) => (
    <MenuItem innerRef={innerRef} {...(innerProps as any)}>
      {children}
    </MenuItem>
  )
)
