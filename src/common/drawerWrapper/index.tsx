import React from 'react'
import { Box, CircularProgress, List } from '@material-ui/core'
import { IDrawerWrapperProps } from './types'

export const DrawerWrapper = React.memo<
  React.PropsWithChildren<IDrawerWrapperProps>
>(({ isLoading, children }) =>
  isLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
      <CircularProgress />
    </Box>
  ) : (
    <List>{children}</List>
  )
)
