import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const app = express();

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/car' });
  
  app.listen({ port: 5005 }, () => {
    console.log(`Server ready at http://localhost:5005/car`);
  });
}

startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});