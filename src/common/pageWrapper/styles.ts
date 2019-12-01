import { makeStyles } from '@material-ui/core'

export const usePageWrapperClasses = makeStyles(
  {
    root: {
      flex: 1,
      padding: '50px 0',
      display: 'flex'
    },
    progressWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
  },
  { name: 'PageWrapperClasses' }
)
