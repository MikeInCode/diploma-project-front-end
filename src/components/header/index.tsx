import React, { Suspense } from 'react'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { onLogoutAction } from 'modules/auth'
import { getProfileAction } from 'modules/profile'
import { subscribeOnChatsAction } from 'modules/chat'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import { useHeaderStyles, useToolbarClasses } from './styles'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'
import { Avatar } from 'common/avatar'
import { useTranslation } from 'react-i18next'
import {
  LanguageMenu,
  NotificationsButton,
  StudentGroupsMenu,
  ThemeButton
} from './components'
import { AccessControl } from 'components/accessControl'
import { RolesEnum } from 'graphQLTypes'

const mapState = ({ auth: { isAuthenticated, user } }: IRootReducer) => ({
  isAuthenticated,
  user
})

const HeaderComponent = React.memo(() => {
  const toolbarClasses = useToolbarClasses({})
  const styles = useHeaderStyles({})

  const { t } = useTranslation()

  const { isAuthenticated, user } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(getProfileAction.started({}))
      dispatch(subscribeOnChatsAction())
    }
  }, [isAuthenticated]) // eslint-disable-line

  const handleTimetableClick = React.useCallback(
    () => dispatch(push(ROUTES.HOME)),
    [dispatch]
  )

  const handleSubjectsClick = React.useCallback(
    () => dispatch(push(ROUTES.SUBJECTS)),
    [dispatch]
  )

  const handleTeachersClick = React.useCallback(
    () => dispatch(push(ROUTES.TEACHERS)),
    [dispatch]
  )

  const handleChatClick = React.useCallback(() => dispatch(push(ROUTES.CHAT)), [
    dispatch
  ])

  const handleAvatarClick = React.useCallback(
    () => dispatch(push(ROUTES.PROFILE)),
    [dispatch]
  )

  const handleLogoutClick = React.useCallback(
    () => dispatch(onLogoutAction()),
    [dispatch]
  )

  const showSkeleton = React.useMemo(() => !user, [user])

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
          <AccessControl permissions={[RolesEnum.STUDENT]}>
            <Button onClick={handleSubjectsClick} color="inherit">
              {t('subjectsLabel')}
            </Button>
          </AccessControl>
          <AccessControl permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER]}>
            <StudentGroupsMenu />
          </AccessControl>
          <Button onClick={handleTeachersClick} color="inherit">
            {t('teachersLabel')}
          </Button>
          <Button onClick={handleChatClick} color="inherit">
            {t('chatLabel')}
          </Button>
        </div>
        <div className={styles.profileContainer}>
          <LanguageMenu />
          <ThemeButton />
          <NotificationsButton />
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
