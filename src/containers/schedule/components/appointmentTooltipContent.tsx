import React from 'react'
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui'
import { IScheduleItem } from 'modules/schedule'
import { Grid } from '@material-ui/core'
import { Person, Room } from '@material-ui/icons'
import { useAppointmentTooltipContentStyles } from './styles'

export const AppointmentTooltipContent = React.memo<
  AppointmentTooltip.ContentProps
>(props => {
  const styles = useAppointmentTooltipContentStyles({})

  const data = props.appointmentData as IScheduleItem

  return (
    <AppointmentTooltip.Content {...props}>
      <Grid container={true} className={styles.item}>
        <Grid item={true} xs={2} className={styles.iconContainer}>
          <Room color="action" />
        </Grid>
        <Grid item={true} xs={10}>
          <span>{data.room}</span>
        </Grid>
      </Grid>
      <Grid container={true} className={styles.item}>
        <Grid item={true} xs={2} className={styles.iconContainer}>
          <Person color="action" />
        </Grid>
        <Grid item={true} xs={10}>
          <span>{`${data.teacher.lastName} ${data.teacher.firstName[0]}.${data.teacher.patronymicName[0]}.`}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
})
