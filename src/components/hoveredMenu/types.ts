import React from 'react'
import { PopperProps } from '@material-ui/core/Popper'

export interface IHoveredMenuProps extends Omit<PopperProps, 'open'> {
  anchor: React.ReactNode
  children: (onClose: () => void) => React.ReactNode
}
