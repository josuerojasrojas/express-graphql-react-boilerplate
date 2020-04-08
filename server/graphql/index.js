const fs = require("fs");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = fs.readFileSync(path.join(__dirname, "./schema.gql"), "utf8");

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
