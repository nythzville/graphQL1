import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    users: [User] #return array of users
    user(id: ID): User #return user by id
  }

  # User object
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  # Mutation
  type Mutation {
    create(name: String, email: String, password: String): User
    update(id: ID, name: String, email: String, password: String): User
    delete(id: ID): User
  }
`;

// const TypeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;

export  {typeDefs} ;