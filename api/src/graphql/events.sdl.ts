export const schema = gql`
  type Event {
    id: Int!
    name: String!
    date: DateTime!
    userId: Int!
    owner: User!
    sendReminder: Boolean!
    invites: [Invite]!
    wishLists: [WishList]!
    pairings: [Pairing]!
    thankyous: [ThankYou]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    name: String!
    date: DateTime!
    userId: Int!
    sendReminder: Boolean!
  }

  input UpdateEventInput {
    name: String
    date: DateTime
    userId: Int
    sendReminder: Boolean
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
