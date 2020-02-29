import { makeStyles, Theme } from '@material-ui/core'

export const useLoginFormStyles = makeStyles<Theme>(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& > *': {
      marginBottom: theme.spacing(3)
    }
  }
}))
