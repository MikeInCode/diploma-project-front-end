import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useLoginPageStyles = makeStyles(
  {
    wrapper: {
      display: 'flex',
      height: '100vh'
    },
    loginForm: {
      width: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        width: 300
      }
    },
    backgroundWrapper: {
      flex: 1,
      position: 'relative'
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: Color.Black,
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
