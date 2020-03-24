import React, { Suspense } from 'react'
import { IRootReducer } from '../../modules/types'
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileAction, onLogoutAction } from '../../modules/auth'
import { getUniversityAction } from '../../modules/university'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useHeaderStyles, useToolbarClasses } from './styles'
import { ExitToApp, Notifications } from '@material-ui/icons'
import { push } from 'connected-react-router'
import { ROUTES } from '../../router/constants'
import { Avatar } from '../../common/avatar'
import { useTranslation } from 'react-i18next'

const mapState = ({
  auth: { isAuthenticated, isLoading: isUserLoading, user },
  university: { isLoading: isUniversityLoading }
}: IRootReducer) => ({
  isAuthenticated,
  isUserLoading,
  user,
  isUniversityLoading
})

const HeaderComponent = React.memo(() => {
  const toolbarClasses = useToolbarClasses({})
  const styles = useHeaderStyles({})

  const { t } = useTranslation()

  const {
    isAuthenticated,
    isUserLoading,
    user,
    isUniversityLoading
  } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isAuthenticated) {
      batch(() => {
        !user && dispatch(getProfileAction.started())
        dispatch(getUniversityAction.started())
      })
    }
    // eslint-disable-next-line
  }, [dispatch, isAuthenticated])

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

  const showSkeleton = React.useMemo(
    () => isUserLoading || isUniversityLoading || !user,
    [isUniversityLoading, isUserLoading, user]
  )

  if (!isAuthenticated) {
    return null
  }

  return (
    <AppBar position="sticky">
      <Toolbar classes={toolbarClasses}>
        <div className={styles.navigationContainer}>
          <Button onClick={handleTimetableClick} color="inherit">
            {t('timetableLabel')}
          </Button>
          <Button color="inherit">{t('studyingLabel')}</Button>
          <Button onClick={handleStudentsClick} color="inherit">
            {t('studentsLabel')}
          </Button>
          <Button onClick={handleTeachersClick} color="inherit">
            {t('teachersLabel')}
          </Button>
          <Button color="inherit">{t('messagesLabel')}</Button>
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
              <Typography variant="body1">{user.username}</Typography>
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

export const Header = () => (
  <Suspense fallback={null}>
    <HeaderComponent />
  </Suspense>
)
