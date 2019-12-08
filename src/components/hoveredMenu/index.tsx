import React from 'react'
import { Popper, Paper } from '@material-ui/core'
import { IHoveredMenuProps } from './types'

export const HoveredMenu = React.memo<IHoveredMenuProps>(
  ({ anchor, children, ...rest }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handlePopoverOpen = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => setAnchorEl(e.currentTarget),
      []
    )

    const handlePopoverClose = React.useCallback(() => setAnchorEl(null), [])

    return (
      <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        {anchor}
        <Popper
          open={!!anchorEl}
          anchorEl={anchorEl}
          placement="bottom-start"
          disablePortal={true}
          {...rest}
        >
          <Paper>{children(handlePopoverClose)}</Paper>
        </Popper>
      </div>
    )
  }
)
