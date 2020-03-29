import React from 'react'
import { IProfileDrawerProps } from './types'
import { useProfileDrawerStyles } from './styles'

export const ProfileDrawer = React.memo<IProfileDrawerProps>(({ profile }) => {
  const styles = useProfileDrawerStyles({})

  return <div>{profile.lastName}</div>
})
