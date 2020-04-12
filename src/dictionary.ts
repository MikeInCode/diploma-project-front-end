import { CourseEnum, SubjectTypeEnum } from './graphQLTypes'

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
