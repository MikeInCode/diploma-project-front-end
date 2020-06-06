import { SubjectTypeEnum } from 'graphQLTypes'

export interface IScheduleState {
  isLoading: boolean
  schedule: IScheduleItem[]
}

export interface IScheduleItem {
  id: string
  title: string
  startDate: string
  endDate: string
  subjectType: SubjectTypeEnum
  teacher: {
    lastName: string
    firstName: string
    patronymicName: string
  }
  room: string
  groups: string[]
}
