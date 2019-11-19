import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useButtonClasses = makeStyles(
  {
    root: {
      height: 35,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      }
    },
    containedPrimary: {
      background: Color.Green,
      '&:hover': {
        background: Color.Green1
      }
    },
    disabled: {
      background: `${Color.Green2} !important`,
      color: `${Color.Green3} !important`
    }
  },
  { name: 'CustomButtonClasses' }
)
