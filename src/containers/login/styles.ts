import { makeStyles } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const useLoginPageStyles = makeStyles(
  {
    wrapper: {
      display: 'flex',
      height: '100vh',
      minHeight: 600
    },
    loginForm: {
      width: 500,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '200px 100px'
    },
    backgroundWrapper: {
      flex: 1,
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: grey['900'],
      opacity: 0.5
    },
    background: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  },
  { name: 'LoginPageStyles' }
)
