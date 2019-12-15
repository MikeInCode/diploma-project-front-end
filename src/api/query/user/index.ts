export const UserQueryService = {
  getSpecialties: () => {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            data: [
              { value: '1', label: 'Computer Engineering' },
              { value: '2', label: 'Computer Science' },
              { value: '3', label: 'Programming Engineering' }
            ]
          }),
        500
      )
    })
  },
  getCourses: () => {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            data: [
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '3' },
              { value: '4', label: '4' },
              { value: '5', label: '5' }
            ]
          }),
        500
      )
    })
  },
  getGroups: () => {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            data: [
              { value: '1', label: 'AI-161' },
              { value: '2', label: 'AI-162' },
              { value: '3', label: 'AI-163' },
              { value: '4', label: 'AI-164' },
              { value: '5', label: 'AI-165' },
              { value: '6', label: 'AT-161' },
              { value: '7', label: 'AT-162' },
              { value: '8', label: 'AT-163' },
              { value: '9', label: 'AM-161' },
              { value: '10', label: 'AM-162' },
              { value: '11', label: 'AM-163' },
              { value: '12', label: 'AO-161' },
              { value: '13', label: 'AO-162' }
            ]
          }),
        500
      )
    })
  }
}
