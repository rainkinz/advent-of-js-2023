export const schema = gql`
  type ThankYou {
    id: Int!
    message: String!
    fromUserId: Int!
    fromUser: User!
    toUserId: Int!
    toUser: User!
    event: Event!
    eventId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    thankYous: [ThankYou!]! @requireAuth
    thankYou(id: Int!): ThankYou @requireAuth
  }

  input CreateThankYouInput {
    message: String!
    fromUserId: Int!
    toUserId: Int!
    eventId: Int!
  }

  input UpdateThankYouInput {
    message: String
    fromUserId: Int
    toUserId: Int
    eventId: Int
  }

  type Mutation {
    createThankYou(input: CreateThankYouInput!): ThankYou! @requireAuth
    updateThankYou(id: Int!, input: UpdateThankYouInput!): ThankYou!
      @requireAuth
    deleteThankYou(id: Int!): ThankYou! @requireAuth
  }
`
