import { makeStyles } from '@material-ui/core'

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
      display: 'flex'
    },
    profileContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    credentialsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginRight: 15
    }
  },
  { name: 'HeaderStyles' }
)
