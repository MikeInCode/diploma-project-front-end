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
    appLogo: {
      marginRight: 20
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      color: Color.White
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 5px'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginRight: 20
    },
    userName: {
      display: 'flex',
      '& > h4': {
        fontWeight: 'bold'
      }
    }
  },
  { name: 'HeaderStyles' }
)
