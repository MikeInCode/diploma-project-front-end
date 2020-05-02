import React from 'react'
import { Badge, Box, IconButton, Menu, MenuItem } from '@material-ui/core'
import { Notifications } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { IRootReducer } from 'modules/types'
import { getChatsAction, onChangeSelectedChatAction } from 'modules/chat'
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'

const mapState = ({ chat: { chats } }: IRootReducer) => ({
  chats
})

export const NotificationsButton = React.memo(() => {
  const { t } = useTranslation()

  const { chats } = useSelector(mapState, shallowEqual)

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
    (id: string) => () => {
      batch(() => {
        dispatch(onChangeSelectedChatAction({ id }))
        dispatch(push(ROUTES.CHAT))
      })
      handleClose()
    },
    [dispatch]
  )

  return (
    <>
      <Badge badgeContent={chatsWithUnreadMessages.length}>
        <IconButton color="inherit" onClick={handleOpen}>
          <Notifications />
        </IconButton>
      </Badge>
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
        {chatsWithUnreadMessages.length ? (
          chatsWithUnreadMessages.map(chat => (
            <MenuItem key={chat.id} onClick={handleChatOpen(chat.id)}>
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
