export const schema = gql`
  type Event {
    id: String!
    name: String!
    date: DateTime!
    userId: String!
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
    event(id: String!): Event @skipAuth
  }

  input CreateEventInput {
    name: String!
    date: DateTime!
    userId: String!
    sendReminder: Boolean!
  }

  input UpdateEventInput {
    name: String
    date: DateTime
    userId: String
    sendReminder: Boolean
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @skipAuth
    updateEvent(id: String!, input: UpdateEventInput!): Event! @skipAuth
    deleteEvent(id: String!): Event! @skipAuth
  }
`
