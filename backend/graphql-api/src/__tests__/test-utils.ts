import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { execute, toPromise } from 'apollo-link';

import { typeDefs, resolvers, ApolloServer, UsersAPI } from '..';

/**
 * Integration testing utils
 */

const constructTestServer = () => {
  const userAPI = new UsersAPI();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ userAPI })
  });

  return { server, userAPI };
};

/**
 * e2e Testing Utils
 */

const startTestServer = async server => {
  // if using apollo-server-express...
  // const app = express();
  // server.applyMiddleware({ app });
  // const httpServer = await app.listen(0);

  const httpServer = await server.listen({ port: 0 });

  // @ts-ignore
  const link = new HttpLink({
    uri: `http://localhost:${httpServer.port}`,
    fetch
  });

  const executeOperation = ({ query, variables = {} }) =>
    execute(link, { query, variables });

  return {
    link,
    stop: () => httpServer.server.close(),
    graphql: executeOperation
  };
};

export { toPromise, startTestServer, constructTestServer };
