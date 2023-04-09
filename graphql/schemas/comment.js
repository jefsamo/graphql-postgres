module.exports = `#graphql

    type Comment {
        id: Int!
        content: String!
        author: User!
        post: Post!
        createdAt: String

    }

    extend type Mutation {
        createComment(content: String!, postId: Int!): CreateCommentResponse
    }

    type CreateCommentResponse {
        id: Int!
        content: String!
        createdAt: String!
    }
`;
