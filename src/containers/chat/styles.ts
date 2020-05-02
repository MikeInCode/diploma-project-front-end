import { makeStyles } from '@material-ui/core'

export const useChatStyles = makeStyles(
  {
    paper: {
      height: 'calc(100vh - 64px - 100px)'
    },
    root: {
      height: '100%'
    }
  },
  { name: 'ChatStyles' }
)
