import { makeStyles } from '@material-ui/core'

export const useTableStyles = makeStyles(
  {
    paper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    tableContainer: {
      flex: '1 1 calc(100vh - 64px - 52px - 100px)' // 100vh - header - pagination - x2 container padding
    }
  },
  { name: 'TableStyles' }
)
