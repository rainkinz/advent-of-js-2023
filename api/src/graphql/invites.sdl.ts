export const schema = gql`
  type Invite {
    id: Int!
    eventId: Int!
    event: Event!
    userId: Int!
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
    invite(id: Int!): Invite @requireAuth
  }

  input CreateInviteInput {
    eventId: Int!
    userId: Int!
    status: InviteStatus!
  }

  input UpdateInviteInput {
    eventId: Int
    userId: Int
    status: InviteStatus
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @requireAuth
    updateInvite(id: Int!, input: UpdateInviteInput!): Invite! @requireAuth
    deleteInvite(id: Int!): Invite! @requireAuth
  }
`
