import { makeStyles } from '@material-ui/core'

export const useTableStyles = makeStyles<any, any>(
  {
    paper: {
      width: '100%'
    },
    header: {
      display: 'flex',
      '& p': {
        fontWeight: 'bold'
      }
    }
  },
  { name: 'TableStyles' }
)
