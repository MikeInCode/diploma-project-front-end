import { makeStyles, Theme } from '@material-ui/core/styles'

export const useAppointmentContentStyles = makeStyles(
  {
    root: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      whiteSpace: 'normal'
    },
    title: {
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  { name: 'AppointmentContentStyles' }
)

export const useAppointmentTooltipContentStyles = makeStyles<Theme>(
  theme => ({
    item: {
      alignItems: 'center',
      marginTop: 10
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      color: theme.palette.action.active
    }
  }),
  { name: 'AppointmentTooltipContentStyles' }
)
