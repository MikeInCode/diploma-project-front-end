import { gql } from 'apollo-boost'

export default gql`
  mutation UpdateProfile($input: UserInput!) {
    updateProfile(input: $input) {
      id
      firstName
      lastName
      email
      role
    }
  }
`
