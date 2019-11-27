export const AuthMutationService = {
  login: variables => {
    return {
      data: {
        token: '123',
        user: {
          email: 'example@gmail.com',
          firsName: 'Mike',
          lastName: 'Mike'
        }
      }
    }
  }
}
