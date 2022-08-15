import { gql } from "@apollo/client";


export const CREATE_USER = gql `
    mutation($name: String!, $email: String!, $password: String!){
        createUser(name: $name, email: $email, password: $password) {
          id
          name
          email
          password
        }
      }
`