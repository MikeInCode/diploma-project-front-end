import React from 'react'
import { Badge, Box, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Notifications } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { IRootReducer } from 'modules/types'
import { getChatsAction, onSelectChatAction } from 'modules/chat'
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'
import { useRouteMatch } from 'react-router-dom'

const mapState = ({ chat: { chats } }: IRootReducer) => ({
  chats
})

export const NotificationsButton = React.memo(() => {
  const { t } = useTranslation()

  const { chats } = useSelector(mapState, shallowEqual)

  const isChatRoute = useRouteMatch(ROUTES.CHAT)

  const chatsWithUnreadMessages = React.useMemo(
    () => chats.filter(chat => chat.unreadCount > 0),
    [chats]
  )

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getChatsAction.started())
  })

  const handleChatOpen = React.useCallback(
    (interlocutorId: string) => () => {
      batch(() => {
        !isChatRoute && dispatch(push(ROUTES.CHAT))
        dispatch(onSelectChatAction({ interlocutorId }))
      })
      handleClose()
    },
    [dispatch, isChatRoute]
  )

  const badgeCount = React.useMemo(
    () =>
      chatsWithUnreadMessages.reduce((acc, val) => acc + val.unreadCount, 0),
    [chatsWithUnreadMessages]
  )

  return (
    <>
      <IconButton color="inherit" onClick={handleOpen}>
        <Badge color="secondary" badgeContent={badgeCount}>
          <Notifications />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {chatsWithUnreadMessages.length > 0 ? (
          chatsWithUnreadMessages.map(chat => (
            <MenuItem
              key={chat.id}
              onClick={handleChatOpen(chat.interlocutor.id)}
            >
              {t('unreadMessages', {
                count: chat.unreadCount,
                user: `${chat.interlocutor.lastName} ${chat.interlocutor.firstName}`
              })}
            </MenuItem>
          ))
        ) : (
          <Box padding="15px 25px">{t('noUnreadMessages')}</Box>
        )}
      </Menu>
    </>
  )
})
