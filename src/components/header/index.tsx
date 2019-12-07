import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../../modules/auth'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import { useAppBarClasses, useHeaderStyles, useToolbarClasses } from './styles'
import { Skeleton } from '../../common/skeleton'
import { Typography } from '../../common/typography'
import { Avatar } from '../../common/avatar'
import { push } from 'connected-react-router'
import { ROUTES } from '../../router/constants'

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

  const showSkeleton = React.useMemo(() => isLoading || !user, [
    isLoading,
    user
  ])

  const handleLogoClick = React.useCallback(() => dispatch(push(ROUTES.HOME)), [
    dispatch
  ])

  const handleAvatarClick = React.useCallback(
    () => dispatch(push(ROUTES.PROFILE)),
    [dispatch]
  )

  const renderInfo = React.useCallback(
    () => (
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
    ),
    // eslint-disable-next-line
    [showSkeleton, styles.profileWrapper, styles.userInfo, user]
  )

  const renderAvatar = React.useCallback(
    () => (
      <>
        {showSkeleton ? (
          <Skeleton variant="circle" width={48} height={48} />
        ) : (
          <Avatar
            src=""
            firstName={user.firstName}
            lastName={user.lastName}
            onClick={handleAvatarClick}
          />
        )}
      </>
    ),
    // eslint-disable-next-line
    [showSkeleton, user]
  )

  if (!isAuthenticated) {
    return null
  }

  return (
    <AppBar position="sticky" classes={appBarClasses}>
      <Toolbar classes={toolbarClasses}>
        <div className={styles.logo} onClick={handleLogoClick}>
          <Typography variant="h2">App name</Typography>
        </div>
        <div className={styles.profileWrapper}>
          {renderInfo()}
          {renderAvatar()}
        </div>
      </Toolbar>
    </AppBar>
  )
})
