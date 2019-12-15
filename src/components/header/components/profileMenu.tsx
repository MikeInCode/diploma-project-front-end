import React from 'react'
import { HoveredMenu } from '../../hoveredMenu'
import { Avatar } from '../../../common/avatar'
import { MenuItem, MenuList } from '@material-ui/core'
import { push } from 'connected-react-router'
import { ROUTES } from '../../../router/constants'
import { onLogoutAction } from '../../../modules/auth'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useProfileMenuStyles } from './styles'
import { IRootReducer } from '../../../modules/types'

const mapState = ({
  auth: {
    user: { firstName, lastName }
  }
}: IRootReducer) => ({
  firstName,
  lastName,
  imgSrc: ''
})

export const ProfileMenu = React.memo(() => {
  const styles = useProfileMenuStyles({})

  const { firstName, lastName, imgSrc } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const handleAvatarClick = React.useCallback(
    () => dispatch(push(ROUTES.PROFILE)),
    [dispatch]
  )

  const handleLogoutClick = React.useCallback(
    (onClose: () => void) => () => {
      onClose()
      dispatch(onLogoutAction())
    },
    [dispatch]
  )

  return (
    <HoveredMenu
      anchor={
        <Avatar
          src={imgSrc}
          firstName={firstName}
          lastName={lastName}
          onClick={handleAvatarClick}
        />
      }
      placement="bottom-end"
    >
      {onClose => (
        <MenuList>
          <MenuItem
            className={styles.logoutItem}
            onClick={handleLogoutClick(onClose)}
          >
            Logout
          </MenuItem>
        </MenuList>
      )}
    </HoveredMenu>
  )
})
