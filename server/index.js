const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// example return greeting string
function getGreeting(date) {
  const time = date.getHours() * 60 + date.getMinutes();
  if(time > 299 && time < 660) return 'Morning';
  else if(time > 660 && time < 1020) return 'Afternoon'
  else return 'Evening'
}

const resolvers = {
  Query: {
    greeting: () => getGreeting(new Date()),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);