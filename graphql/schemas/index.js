const userType = require("./user");
const postType = require("./post");
const commentType = require("./comment");

const rootType = `#graphql
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

module.exports = [rootType, userType, postType, commentType];
