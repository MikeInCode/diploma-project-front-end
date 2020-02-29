import React from 'react'
import { IProfileDrawerProps } from './types'
import { useProfileDrawerStyles } from './styles'
import { Avatar } from '../../../common/avatar'
import { Box, Typography } from '@material-ui/core'

export const ProfileDrawer = React.memo<IProfileDrawerProps>(({ profile }) => {
  const styles = useProfileDrawerStyles({})

  const renderInfo = React.useCallback(
    (label: string, key: typeof profile) => {
      const value = profile[key]
      return (
        !!value && (
          <>
            <Typography variant="body1" className={styles.label}>
              {label}
            </Typography>
            <Typography variant="body1">{value}</Typography>
          </>
        )
      )
    },
    [profile, styles.label]
  )

  return (
    <>
      <div className={styles.avatarWrapper}>
        <Avatar
          src=""
          firstName={profile.firstName}
          lastName={profile.lastName}
          variant="square"
          className={styles.avatar}
        />
        <div>
          {renderInfo('First name:', 'firstName')}
          <Box height={10} />
          {renderInfo('Last name:', 'lastName')}
          <Box height={10} />
          {renderInfo('Patronymic name:', 'patronymicName')}
        </div>
      </div>
      <Box height={10} />
      {renderInfo('Speciality:', 'speciality')}
      <Box height={10} />
      {renderInfo('Course:', 'course')}
      <Box height={10} />
      {renderInfo('Group:', 'group')}
      <Box height={10} />
      {renderInfo('Department:', 'department')}
      <Box height={10} />
      {renderInfo('Subjects:', 'subjects')}
      <Box height={10} />
      {renderInfo('Phone:', 'phone')}
      <Box height={10} />
      {renderInfo('Email:', 'email')}
      <Box height={10} />
      {renderInfo('Telegram:', 'telegram')}
    </>
  )
})
