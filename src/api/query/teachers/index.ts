import { apolloClient } from '../../index'

export const TeachersQueryService = {
  getTeachers: () => {
    const teacher = {
      id: '1',
      name: 'Mykhailo',
      surname: 'Serbin',
      fatherName: 'Olehovich',
      subjects: 'Subject 1, Subject 2',
      department: 'Department 1'
    }
    const data = Array.from(Array(100)).map(() => teacher)
    return new Promise(resolve => {
      setTimeout(() => resolve({ data }), 500)
    })
  }
}
