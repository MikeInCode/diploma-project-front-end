import { makeStyles } from '@material-ui/core'
import { Color } from '../../theme'

export const useTableStyles = makeStyles(
  {
    paper: {
      width: '100%'
    },
    row: {
      display: 'flex',
      '& > *': {
        padding: 20
      }
    },
    header: {
      display: 'flex',
      '& > *': {
        padding: '10px 20px'
      },
      borderBottom: `1px solid ${Color.Grey1}`
    }
  },
  { name: 'TableStyles' }
)
