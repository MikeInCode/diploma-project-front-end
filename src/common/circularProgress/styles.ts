import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useCircularProgressClasses = makeStyles(
  {
    root: {
      color: Color.Green
    }
  },
  { name: 'CustomCircularProgressClasses' }
)
