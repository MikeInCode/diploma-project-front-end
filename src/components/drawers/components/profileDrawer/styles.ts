import { makeStyles } from '@material-ui/core'

export const useProfileDrawerStyles = makeStyles(
  {
    avatarWrapper: {
      display: 'flex'
    },
    avatar: {
      width: 125,
      height: 125,
      marginRight: 15
    },
    label: {
      fontWeight: 'bold'
    }
  },
  { name: 'ProfileDrawerStyles' }
)
