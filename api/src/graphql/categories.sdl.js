export const schema = gql`
  type Category {
    id: Int!
    name: String!
    photo: String
    desc: String
    Service: [Service]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    photo: String
    desc: String
  }

  input UpdateCategoryInput {
    name: String
    photo: String
    desc: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
