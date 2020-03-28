import { makeStyles } from '@material-ui/core/styles'

export const useCascadingMenuStyles = makeStyles(
  {
    menuItem: {
      maxWidth: 320,
      minHeight: 40,
      justifyContent: 'space-between',
      '& p': {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  { name: 'CascadingMenuStyles' }
)
