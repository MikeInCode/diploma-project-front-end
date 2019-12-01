import { gql } from 'apollo-boost'

export default gql`
  query GetProfile {
    profile {
      id
      firstName
      lastName
      email
      role
    }
  }
`
