import { makeStyles, Theme } from '@material-ui/core'

export const useProfileFormStyles = makeStyles<Theme, { avatarHeight: number }>(
  {
    avatar: {
      width: '100%',
      height: ({ avatarHeight }) => avatarHeight
    }
  },
  {
    name: 'ProfileFormStyles'
  }
)
