import { makeStyles } from '@material-ui/core'

export const usePageNotFoundStyles = makeStyles(
  {
    wrapper: {
      height: '100vh',
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
