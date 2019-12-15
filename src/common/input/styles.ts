import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useInputClasses = makeStyles(
  {
    root: {
      border: `1px solid ${Color.Grey}`,
      borderRadius: 5,
      background: Color.Grey1,
      height: 35,
      transition: '100ms'
    },
    input: {
      padding: '6px 12px',
      '&::placeholder': {
        color: Color.Grey,
        opacity: 1
      }
    },
    error: {
      border: `1px solid ${Color.Red}`,
      background: Color.Red1
    },
    focused: {
      boxShadow: `0 0 0 1px ${Color.Grey}`,
      '&$error': {
        boxShadow: `0 0 0 1px ${Color.Red}`
      }
    }
  },
  { name: 'CustomInputClasses' }
)

export const useInputStyles = makeStyles(
  {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    },
    errorMessage: {
      color: Color.Red,
      position: 'absolute',
      top: 35
    }
  },
  { name: 'CustomInputStyles' }
)
