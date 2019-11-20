import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useInputClasses = makeStyles(
  {
    root: {
      border: `1px solid ${Color.Grey}`,
      borderRadius: 5,
      background: Color.Grey1,
      height: 35
    },
    input: {
      color: Color.Grey2,
      padding: '6px 12px'
    },
    error: {
      border: `1px solid ${Color.Red}`,
      background: Color.Red1
    },
    focused: {
      border: `2px solid ${Color.Grey}`,
      '&$error': {
        border: `2px solid ${Color.Red}`
      },
      '& input': {
        padding: '6px 11px'
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
      position: 'relative',
      marginBottom: 12
    },
    errorMessage: {
      color: Color.Red,
      position: 'absolute',
      top: 35
    }
  },
  { name: 'CustomInputStyles' }
)
