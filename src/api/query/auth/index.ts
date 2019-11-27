export const AuthQueryService = {
  getProfile: () => {
    return {
      data: {
        user: {
          email: 'example@gmail.com',
          firsName: 'Mike',
          lastName: 'Mike'
        }
      }
    }
  }
}
