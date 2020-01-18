import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useStudentsStyles = makeStyles({
  gradebook: {
    marginRight: 5,
    '& svg': {
      color: Color.Black,
      opacity: 0.8
    }
  },
  message: {
    marginRight: 15,
    '& svg': {
      color: Color.Black,
      opacity: 0.8
    }
  }
})
