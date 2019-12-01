import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useAppBarClasses = makeStyles(
  {
    root: {
      background: Color.Green
    }
  },
  { name: 'CustomAppBarClasses' }
)

export const useToolbarClasses = makeStyles(
  {
    root: {
      justifyContent: 'space-between'
    }
  },
  { name: 'CustomToolbarClasses' }
)

export const useHeaderStyles = makeStyles(
  {
    profileWrapper: {
      display: 'flex'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginRight: 16
    },
    userName: {
      display: 'flex',
      '& > h4': {
        fontWeight: 'bold'
      }
    },
    avatar: {
      cursor: 'pointer',
      width: 48,
      height: 48
    }
  },
  { name: 'HeaderStyles' }
)
