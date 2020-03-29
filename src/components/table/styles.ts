import { makeStyles, Theme } from '@material-ui/core'

export const useTableStyles = makeStyles<Theme, { showOverlay?: boolean }>(
  {
    paper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    tableContainer: {
      flex: '1 0 220px',
      position: 'relative',
      overflowY: ({ showOverlay }) => (showOverlay ? 'hidden' : 'auto')
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
      top: 56,
      bottom: 0,
      background: 'rgba(250, 250, 250, 0.3)',
      zIndex: 1,
      '& img': {
        width: 80
      }
    }
  },
  { name: 'TableStyles' }
)
