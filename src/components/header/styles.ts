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
    navigationContainer: {
      display: 'flex',
      '& > *': {
        marginRight: 10
      }
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        marginLeft: 10
      }
    },
    credentialsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }
  },
  { name: 'HeaderStyles' }
)
