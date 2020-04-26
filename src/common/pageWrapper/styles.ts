import { makeStyles, Theme } from '@material-ui/core'

export const usePageWrapperClasses = makeStyles<Theme, { isLoading: boolean }>(
  {
    root: ({ isLoading }) => ({
      padding: '50px 0',
      ...(isLoading ? { flex: 1, display: 'flex' } : {})
    }),
    progressWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
  },
  { name: 'PageWrapperClasses' }
)
