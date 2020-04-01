import { makeStyles } from '@material-ui/core/styles'

export const useStudentsStyles = makeStyles(
  {
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    groupDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      '& p span': {
        fontWeight: 500
      }
    },
    input: {
      width: 300
    }
  },
  { name: 'StudentsStyles' }
)
