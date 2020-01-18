import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useTeachersStyles = makeStyles({
  message: {
    marginRight: 15,
    '& svg': {
      color: Color.Black,
      opacity: 0.8
    }
  }
})
