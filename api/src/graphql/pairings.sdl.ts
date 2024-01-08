export const schema = gql`
  type Pairing {
    id: Int!
    url: String!
    personId: Int!
    person: User!
    santaId: Int!
    santa: User!
    order: Int!
    event: Event!
    eventId: Int!
    siteImage: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pairings: [Pairing!]! @requireAuth
    pairing(id: Int!): Pairing @requireAuth
  }

  input CreatePairingInput {
    url: String!
    personId: Int!
    santaId: Int!
    order: Int!
    eventId: Int!
    siteImage: String!
  }

  input UpdatePairingInput {
    url: String
    personId: Int
    santaId: Int
    order: Int
    eventId: Int
    siteImage: String
  }

  type Mutation {
    createPairing(input: CreatePairingInput!): Pairing! @requireAuth
    updatePairing(id: Int!, input: UpdatePairingInput!): Pairing! @requireAuth
    deletePairing(id: Int!): Pairing! @requireAuth
  }
`
