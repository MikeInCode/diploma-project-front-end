import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const useTypographyClasses = makeStyles<Theme>(
  theme =>
    createStyles({
      root: {
        fontFamily: theme.typography.fontFamily,
        lineHeight: 'normal'
      },
      h1: {
        fontSize: 35
      },
      h2: {
        fontSize: 25
      },
      h3: {
        fontSize: 20
      },
      body1: {
        fontSize: 14
      },
      body2: {
        fontSize: 12
      }
    }),
  { name: 'CustomTypographyClasses' }
)
