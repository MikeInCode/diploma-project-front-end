import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileAction, onLogoutAction } from '../../modules/auth'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { useAppBarClasses, useHeaderStyles, useToolbarClasses } from './styles'
import { ExitToApp, Notifications } from '@material-ui/icons'
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

  const handleTeachersClick = React.useCallback(
    () => dispatch(push(ROUTES.TEACHERS)),
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
        <div className={styles.navigationContainer}>
          <Button onClick={handleTimetableClick}>Timetable</Button>
          <Button onClick={handleStudentsClick}>Students</Button>
          <Button>Studying</Button>
          <Button onClick={handleTeachersClick}>Teachers</Button>
          <Button>Messages</Button>
        </div>
        <div className={styles.profileContainer}>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <div className={styles.credentialsWrapper}>
            {showSkeleton ? (
              <Skeleton variant="text" width={150} />
            ) : (
              <Typography variant="h6">{`${user.firstName} ${user.lastName}`}</Typography>
            )}
            {showSkeleton ? (
              <Skeleton variant="text" width={120} />
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
          <IconButton color="inherit" onClick={handleLogoutClick}>
            <ExitToApp />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
})
