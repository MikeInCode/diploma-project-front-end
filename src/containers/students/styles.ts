import { makeStyles } from '@material-ui/core/styles'

export const useStudentsStyles = makeStyles(
  {
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    input: {
      width: 300
    },
    groupDetailsContainer: {
      padding: 0,
      '& li': {
        padding: 0,
        '& > div': {
          margin: 0,
          alignItems: 'flex-end'
        }
      }
    },
    listItemText: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  },
  { name: 'StudentsStyles' }
)
