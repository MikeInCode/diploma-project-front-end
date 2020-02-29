import { apolloClient } from '../../index'

export const TeachersQueryService = {
  getTeachers: () => {
    const teacher = {
      id: '1',
      firstName: 'Mykhailo',
      lastName: 'Serbin',
      patronymicName: 'Olehovich',
      subjects: 'Subject 1, Subject 2',
      department: 'Department 1',
      phone: '1111111',
      email: 'example@gmail.com',
      telegram: 'example'
    }
    const data = Array.from(Array(15)).map(() => teacher)
    return new Promise(resolve => {
      setTimeout(() => resolve({ data }), 500)
    })
  }
}
