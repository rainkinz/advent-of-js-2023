export const schema = gql`
  type WishList {
    id: Int!
    name: String!
    url: String!
    userId: Int!
    order: Int!
    event: Event!
    eventId: Int!
    siteImage: String!
    siteTitle: String!
    siteDescription: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    wishLists: [WishList!]! @requireAuth
    wishList(id: Int!): WishList @requireAuth
  }

  input CreateWishListInput {
    name: String!
    url: String!
    userId: Int!
    order: Int!
    eventId: Int!
    siteImage: String!
    siteTitle: String!
    siteDescription: String!
  }

  input UpdateWishListInput {
    name: String
    url: String
    userId: Int
    order: Int
    eventId: Int
    siteImage: String
    siteTitle: String
    siteDescription: String
  }

  type Mutation {
    createWishList(input: CreateWishListInput!): WishList! @requireAuth
    updateWishList(id: Int!, input: UpdateWishListInput!): WishList!
      @requireAuth
    deleteWishList(id: Int!): WishList! @requireAuth
  }
`
