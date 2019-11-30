import { gql } from 'apollo-boost'

export default gql`
  query UserMe {
    userMe {
      id
      firstName
      lastName
      email
      role
    }
  }
`
