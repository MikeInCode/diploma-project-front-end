import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileAction, onLogoutAction } from '../../modules/auth'
import { AppBar, Box, IconButton, Toolbar } from '@material-ui/core'
import { useAppBarClasses, useHeaderStyles, useToolbarClasses } from './styles'
import { Typography } from '../../common/typography'
import { ExitToApp, Notifications } from '@material-ui/icons'
import { Button } from '../../common/button'
import { push } from 'connected-react-router'
import { ROUTES } from '../../router/constants'
import { Skeleton } from '../../common/skeleton'
import { Avatar } from '../../common/avatar'

const mapState = ({
  auth: { isAuthenticated, isLoading, user }
}: IRootReducer) => ({
  isAuthenticated,
  isLoading,
  user
})

export const Header = React.memo(() => {
  const appBarClasses = useAppBarClasses({})
  const toolbarClasses = useToolbarClasses({})
  const styles = useHeaderStyles({})

  const { isAuthenticated, isLoading, user } = useSelector(
    mapState,
    shallowEqual
  )

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(getProfileAction.started())
    }
  }, [dispatch, isAuthenticated, user])

  const handleTimetableClick = React.useCallback(
    () => dispatch(push(ROUTES.HOME)),
    [dispatch]
  )

  const handleStudentsClick = React.useCallback(
    () => dispatch(push(ROUTES.STUDENTS)),
    [dispatch]
  )

  const handleAvatarClick = React.useCallback(
    () => dispatch(push(ROUTES.PROFILE)),
    [dispatch]
  )

  const handleLogoutClick = React.useCallback(
    () => dispatch(onLogoutAction()),
    [dispatch]
  )

  const showSkeleton = React.useMemo(() => isLoading || !user, [
    isLoading,
    user
  ])

  if (!isAuthenticated) {
    return null
  }

  return (
    <AppBar position="sticky" classes={appBarClasses}>
      <Toolbar classes={toolbarClasses}>
        <div className={styles.wrapper}>
          <Typography variant="h2" className={styles.appLogo}>
            App name
          </Typography>
          <Button onClick={handleTimetableClick}>Timetable</Button>
          <Button onClick={handleStudentsClick}>Students</Button>
          <Button>Studying</Button>
          <Button>Teachers</Button>
          <Button>Messages</Button>
        </div>
        <div className={styles.wrapper}>
          <IconButton>
            <Notifications className={styles.icon} />
          </IconButton>
          <div className={styles.profileContainer}>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                {showSkeleton ? (
                  <Skeleton variant="text" width={80} />
                ) : (
                  <Typography variant="h4">{user.firstName}</Typography>
                )}
                <Box width={8} />
                {showSkeleton ? (
                  <Skeleton variant="text" width={80} />
                ) : (
                  <Typography variant="h4">{user.lastName}</Typography>
                )}
              </div>
              {showSkeleton ? (
                <Skeleton variant="text" width={168} />
              ) : (
                <Typography variant="body1">{user.email}</Typography>
              )}
            </div>
            {showSkeleton ? (
              <Skeleton variant="circle" width={40} height={40} />
            ) : (
              <Avatar
                src={''}
                firstName={user.firstName}
                lastName={user.lastName}
                onClick={handleAvatarClick}
              />
            )}
          </div>
          <IconButton onClick={handleLogoutClick}>
            <ExitToApp className={styles.icon} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
})
