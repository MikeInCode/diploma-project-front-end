import { makeStyles } from '@material-ui/core'

export const usePageNotFoundStyles = makeStyles(
  {
    wrapper: {
      flex: 1,
      minHeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: 400
      }
    }
  },
  { name: 'PageNotFoundStyles' }
)
