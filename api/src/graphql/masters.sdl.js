export const schema = gql`
  type Master {
    id: Int!
    firstName: String!
    secondName: String!
    photo: String
    specialization: Category!
    categoryId: Int!
  }

  type Query {
    masters: [Master!]! @requireAuth
    master(id: Int!): Master @requireAuth
  }

  input CreateMasterInput {
    firstName: String!
    secondName: String!
    categoryId: Int!
  }

  input UpdateMasterInput {
    firstName: String
    secondName: String
    categoryId: Int
  }

  type Mutation {
    createMaster(input: CreateMasterInput!): Master! @requireAuth
    updateMaster(id: Int!, input: UpdateMasterInput!): Master! @requireAuth
    deleteMaster(id: Int!): Master! @requireAuth
  }
`
