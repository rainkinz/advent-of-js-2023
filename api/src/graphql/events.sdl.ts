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
    events: [Event!]! @skipAuth
    event(id: Int!): Event @skipAuth
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
    createEvent(input: CreateEventInput!): Event! @skipAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @skipAuth
    deleteEvent(id: Int!): Event! @skipAuth
  }
`
