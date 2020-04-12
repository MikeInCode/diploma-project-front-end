import React from 'react'
import { PageWrapper } from 'common/pageWrapper'
import { useMount, useUnmount } from 'react-use'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from 'modules/types'
import { clearScheduleAction, getScheduleAction } from 'modules/schedule'
import { Paper } from '@material-ui/core'
import {
  Appointments,
  AppointmentTooltip,
  CurrentTimeIndicator,
  DateNavigator,
  MonthView,
  Resources,
  Scheduler,
  TodayButton,
  Toolbar,
  ViewSwitcher,
  WeekView
} from '@devexpress/dx-react-scheduler-material-ui'
import { Resource, ViewState } from '@devexpress/dx-react-scheduler'
import { AppointmentContent, AppointmentTooltipContent } from './components'
import { SubjectTypeEnum } from '../../graphQLTypes'
import { useTranslation } from 'react-i18next'
import { purple, teal } from '@material-ui/core/colors'

const mapState = ({ schedule: { schedule, isLoaded } }: IRootReducer) => ({
  schedule,
  isLoaded
})

const Schedule = React.memo(() => {
  const { t, i18n } = useTranslation()

  const { schedule, isLoaded } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getScheduleAction.started())
  })

  useUnmount(() => {
    dispatch(clearScheduleAction())
  })

  const resources: Resource[] = React.useMemo(
    () => [
      {
        fieldName: 'subjectType',
        instances: [
          {
            id: SubjectTypeEnum.LECTURE,
            text: t('lectureLabel'),
            color: teal
          },
          {
            id: SubjectTypeEnum.LABORATORY,
            text: t('laboratoryLabel'),
            color: purple
          }
        ]
      }
    ],
    [t]
  )

  return (
    <PageWrapper isLoading={!isLoaded}>
      <Paper>
        <Scheduler
          data={schedule}
          height={window.innerHeight - 64 - 100}
          locale={i18n.language}
        >
          <ViewState />
          <WeekView
            displayName={t('weekViewLabel')}
            startDayHour={7}
            endDayHour={18}
            cellDuration={60}
          />
          <MonthView displayName={t('monthViewLabel')} />
          <Toolbar />
          <DateNavigator />
          <TodayButton
            messages={{
              today: t('todayLabel')
            }}
          />
          <ViewSwitcher />
          <Appointments appointmentContentComponent={AppointmentContent} />
          <AppointmentTooltip contentComponent={AppointmentTooltipContent} />
          <Resources data={resources} />
          <CurrentTimeIndicator
            shadePreviousCells={true}
            shadePreviousAppointments={true}
          />
        </Scheduler>
      </Paper>
    </PageWrapper>
  )
})

export default Schedule
