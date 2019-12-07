import { makeStyles } from '@material-ui/core'

export const useProfileFormStyles = makeStyles(
  {
    form: {
      display: 'flex',
      flex: 1
    },
    leftPart: {
      flex: '0 1 250px'
    },
    rightPart: {
      marginLeft: 30,
      display: 'flex',
      flexDirection: 'column',
      flex: 2
    },
    multipleRow: {
      display: 'flex',
      marginBottom: 10,
      '& > *:first-child': {
        flex: 1
      },
      '& > *:last-child': {
        flex: 1,
        marginLeft: 30
      }
    },
    loadImageBtn: {
      marginTop: 22
    },
    avatar: {
      width: '100%',
      height: 250
    }
  },
  {
    name: 'ProfileFormStyles'
  }
)
