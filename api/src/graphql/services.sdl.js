export const schema = gql`
  type Service {
    id: Int!
    name: String!
    cost: Int!
    desc: String
    category: Category
    categoryId: Int
  }

  type Query {
    services: [Service!]! @requireAuth
    service(id: Int!): Service @requireAuth
  }

  input CreateServiceInput {
    name: String!
    cost: Int!
    desc: String
    categoryId: Int
  }

  input UpdateServiceInput {
    name: String
    cost: Int
    desc: String
    categoryId: Int
  }

  type Mutation {
    createService(input: CreateServiceInput!): Service! @requireAuth
    updateService(id: Int!, input: UpdateServiceInput!): Service! @requireAuth
    deleteService(id: Int!): Service! @requireAuth
  }
`
