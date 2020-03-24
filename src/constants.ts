import { CourseEnum } from './graphQLTypes'
import { courseDictionary } from './dictionary'

export const API_URL = 'http://localhost:3001/graphql'

export const SCROLL_WIDTH = 5

export const DRAWER_WIDTH = 400

const COURSES_PRIORITY = {
  [CourseEnum.ONE]: 1,
  [CourseEnum.TWO]: 2,
  [CourseEnum.THREE]: 3,
  [CourseEnum.FOUR]: 4,
  [CourseEnum.FIVE]: 5,
  [CourseEnum.SIX]: 6
}

export const COURSES_OPTIONS = Object.keys(CourseEnum)
  .sort((a, b) => COURSES_PRIORITY[a] - COURSES_PRIORITY[b])
  .map(key => ({
    value: key,
    label: courseDictionary[key]
  }))
