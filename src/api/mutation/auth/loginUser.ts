import { gql } from 'apollo-boost'

export default gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      token
      user {
        id
      }
    }
  }
`
