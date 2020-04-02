import { makeStyles } from '@material-ui/core'

export const useProfileDrawerStyles = makeStyles(
  {
    listItemText: {
      display: 'flex',
      flexDirection: 'column-reverse'
    },
    avatar: {
      width: 190,
      height: 190
    }
  },
  { name: 'ProfileDrawerStyles' }
)
