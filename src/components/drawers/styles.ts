import { makeStyles } from '@material-ui/core'
import { DRAWER_WIDTH } from 'appConstants'

export const useDrawerStyles = makeStyles(
  {
    root: {
      width: DRAWER_WIDTH,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'auto',
      '&.ASSESSMENT': {
        width: 700
      }
    }
  },
  { name: 'DrawerStyles' }
)
