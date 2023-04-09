module.exports = `#graphql
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
        posts: [Post!]
    }

    type Query{
        users:[User!]
    }


    extend type Mutation {
        register(input: RegisterInput!): RegisterResponse
        login(input: LoginInput!): LoginResponse
    }

    type RegisterResponse {
        id: Int!
        name: String!
        email: String!
    }

    type LoginResponse {
        id: Int!
        name: String!
        email: String!
        token: String!
    }

    input RegisterInput {
        name: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }


`;
