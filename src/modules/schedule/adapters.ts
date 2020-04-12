import { GetSchedule_schedule } from '../../graphQLTypes'
import { IScheduleItem } from './types'

export const adaptSchedule = (
  schedule: GetSchedule_schedule[]
): IScheduleItem[] =>
  schedule.map(item => ({
    id: item.id,
    title: item.scheduledSubject.subject.name,
    startDate: item.startTime,
    endDate: item.endTime,
    subjectType: item.scheduledSubject.subject.subjectType,
    teacher: {
      lastName: item.scheduledSubject.teacher.lastName,
      firstName: item.scheduledSubject.teacher.firstName,
      patronymicName: item.scheduledSubject.teacher.patronymicName
    },
    room: item.room
  }))
