import React from 'react'
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui'
import { Typography } from '@material-ui/core'
import { IScheduleItem } from '../../../modules/schedule'
import { useTranslation } from 'react-i18next'
import { useAppointmentContentStyles } from './styles'

export const AppointmentContent = React.memo<
  Appointments.AppointmentContentProps
>(props => {
  const { t } = useTranslation()

  const styles = useAppointmentContentStyles({})

  const data = props.data as IScheduleItem

  return (
    <Appointments.AppointmentContent {...props} className={styles.root}>
      <div>
        <Typography variant="body2" className={styles.title}>
          {data.title}
        </Typography>
        <Typography component="p" variant="caption">
          {`${props.formatDate(data.startDate, {
            hour: 'numeric',
            minute: 'numeric'
          })} - ${props.formatDate(data.endDate, {
            hour: 'numeric',
            minute: 'numeric'
          })}`}
        </Typography>
      </div>
      <div>
        <Typography component="p" variant="caption">
          {`${t('roomLabel')}: ${data.room}`}
        </Typography>
        <Typography
          component="p"
          variant="caption"
        >{`${data.teacher.lastName} ${data.teacher.firstName[0]}.${data.teacher.patronymicName[0]}.`}</Typography>
      </div>
    </Appointments.AppointmentContent>
  )
})
