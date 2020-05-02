import { makeStyles } from '@material-ui/core/styles'

export const useAppointmentTooltipContentStyles = makeStyles(
  {
    item: {
      alignItems: 'center',
      marginTop: 10
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  { name: 'AppointmentTooltipContentStyles' }
)
