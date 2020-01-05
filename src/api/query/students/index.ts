import { apolloClient } from '../../index'

export const StudentsQueryService = {
  getStudents: () => {
    const student = {
      id: '1',
      name: 'Mykhailo',
      surname: 'Serbin',
      fatherName: 'Olehovich',
      specialty: 'Specialty 1',
      course: '4',
      group: 'AI-162'
    }
    const data = Array.from(Array(10000)).map(() => student)
    return new Promise(resolve => {
      setTimeout(() => resolve({ data }), 500)
    })
  }
}
