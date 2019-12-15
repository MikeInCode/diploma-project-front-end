import { makeStyles } from '@material-ui/core'

export const useProfileFormStyles = makeStyles(
  {
    form: {
      display: 'flex',
      flex: 1,
      alignItems: 'flex-start'
    },
    leftPart: {
      flex: '0 1 250px'
    },
    rightPart: {
      marginLeft: 25,
      flex: 1,
      display: 'flex',
      flexWrap: 'wrap',
      '& > *:not(:last-child)': {
        flex: '0 1 calc(50% - 15px)',
        marginBottom: 25,
        '&:nth-child(2n)': {
          marginLeft: 25
        }
      }
    },
    avatar: {
      width: '100%',
      height: 250
    },
    uploadImageBtn: {
      marginTop: 10
    }
  },
  {
    name: 'ProfileFormStyles'
  }
)
