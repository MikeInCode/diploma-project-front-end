import { CourseEnum, MarkValueEnum, SubjectTypeEnum } from './graphQLTypes'

export const courseDictionary = {
  [CourseEnum.ONE]: '1',
  [CourseEnum.TWO]: '2',
  [CourseEnum.THREE]: '3',
  [CourseEnum.FOUR]: '4',
  [CourseEnum.FIVE]: '5',
  [CourseEnum.SIX]: '6'
}

export const subjectTypeDictionary = {
  [SubjectTypeEnum.LABORATORY]: 'laboratoryLabel',
  [SubjectTypeEnum.LECTURE]: 'lectureLabel'
}

export const markDictionary = {
  [MarkValueEnum.EMPTY]: '—',
  [MarkValueEnum.TWO]: '2',
  [MarkValueEnum.TWO_AND_A_HALF]: '2.5',
  [MarkValueEnum.THREE]: '3',
  [MarkValueEnum.THREE_AND_A_HALF]: '3.5',
  [MarkValueEnum.FOUR]: '4',
  [MarkValueEnum.FOUR_AND_A_HALF]: '4.5',
  [MarkValueEnum.FIVE]: '5'
}
