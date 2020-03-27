export const StudentsService = {
  getStudents: () => {
    const student = {
      id: '1',
      firstName: 'Mykhailo',
      lastName: 'Serbin',
      patronymicName: 'Olehovich',
      specialty: 'Specialty 1',
      course: '4',
      group: 'AI-162',
      phone: '1111111',
      email: 'example@gmail.com',
      telegram: 'example'
    }
    const data = Array.from(Array(100)).map(() => student)
    return new Promise(resolve => {
      setTimeout(() => resolve({ data }), 500)
    })
  }
}
