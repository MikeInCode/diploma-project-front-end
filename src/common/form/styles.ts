import { makeStyles } from '@material-ui/core'

export const useRowStyles = makeStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  },
  {
    name: 'RowStyles'
  }
)
