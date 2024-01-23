export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String
    avatar: String
    role: UserType!
    # createdAt: DateTime!
    # updatedAt: DateTime!
    invites: [Invite]!
    events: [Event]!
    santa: [Pairing]!
    person: [Pairing]!
    thankYousFrom: [ThankYou]!
    thankYousTo: [ThankYou]!
  }

  enum UserType {
    ADMIN
    USER
  }

  type Query {
    users: [User!]! @skipAuth # TODO turn back on @requireAuth
    user(id: Int!): User @skipAuth # TODO: turn back on @requireAuth
  }

  input CreateUserInput {
    email: String!
    name: String
    avatar: String
    role: UserType!
  }

  input UpdateUserInput {
    email: String
    name: String
    avatar: String
    role: UserType
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
