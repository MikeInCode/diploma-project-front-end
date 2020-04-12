import { makeStyles } from '@material-ui/core'

export const useTableStyles = makeStyles(
  {
    paper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    tableContainer: {
      flex: '1 0 220px',
      position: 'relative'
    },
    toolbar: {
      width: 1280
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 52,
      bottom: 0,
      '& img': {
        width: 80
      }
    },
    headerCell: {
      '& p': {
        fontWeight: 500
      }
    }
  },
  { name: 'TableStyles' }
)
