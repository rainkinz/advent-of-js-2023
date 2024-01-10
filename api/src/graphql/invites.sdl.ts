export const schema = gql`
  type Invite {
    id: String!
    eventId: String!
    event: Event!
    userId: String!
    user: User!
    status: InviteStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum InviteStatus {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @requireAuth
    invite(id: String!): Invite @requireAuth
  }

  input CreateInviteInput {
    eventId: String!
    userId: String
    status: InviteStatus!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    eventId: String
    userId: String
    status: InviteStatus
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @skipAuth # @requireAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @requireAuth
    deleteInvite(id: String!): Invite! @requireAuth
  }
`
