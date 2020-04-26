import { makeStyles } from '@material-ui/core/styles'

export const useStudentsStyles = makeStyles(
  {
    title: {
      display: 'flex',
      alignItems: 'center'
    },
    listItemText: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: 10
    },
    orderCell: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  { name: 'StudentsStyles' }
)
