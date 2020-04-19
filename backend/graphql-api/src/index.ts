import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { UsersAPI } from './data-sources';
import { resolvers } from './resolvers';

const typeDefs = importSchema('./src/graphql/schema.graphql');

const dataSources = () => ({
  userAPI: new UsersAPI()
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
  server
    .listen({ port: 4000 })
    .then(({ url }) => console.log(`🚀 Server running at ${url}`));
}

// export all the important pieces for integration/e2e tests to use
export { dataSources, typeDefs, resolvers, ApolloServer, UsersAPI, server };
