import { makeStyles, Theme } from '@material-ui/core'

export const useChatListStyles = makeStyles<Theme>(
  theme => ({
    root: {
      width: '100%',
      flex: '1 1 0px',
      overflow: 'auto',
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }),
  { name: 'ChatListStyles' }
)

export const useChatListItemStyles = makeStyles(
  theme => ({
    root: {
      alignItems: 'stretch'
    },
    listItemText: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& > *': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    },
    date: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    },
    unreadCount: {
      height: 20,
      minWidth: 20,
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 500,
      lineHeight: 1,
      fontSize: '0.75rem'
    }
  }),
  { name: 'ChatListItemStyles' }
)

export const useMessagesListStyles = makeStyles(
  {
    loader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    messagesList: {
      flex: '1 1 0px',
      overflow: 'auto',
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        maxWidth: 600,
        '&:first-child': {
          marginTop: 'auto'
        }
      }
    },
    messagesDateLabel: {
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 0'
    },
    messageContainer: {
      padding: '8px 0'
    }
  },
  { name: 'MessagesListStyles' }
)

export const useMessageStyles = makeStyles<Theme, { isIncoming: boolean }>(
  theme => ({
    root: {
      display: 'flex'
    },
    message: {
      marginLeft: 16,
      padding: 10,
      borderRadius: 15,
      background: ({ isIncoming }) =>
        isIncoming ? theme.palette.divider : theme.palette.primary.light
    }
  }),
  { name: 'MessageStyles' }
)

export const useSubmitInputStyles = makeStyles(
  {
    root: {
      padding: '10px 16px 16px 16px',
      display: 'flex'
    },
    input: {
      flex: 1
    }
  },
  { name: 'SubmitInputStyles' }
)
