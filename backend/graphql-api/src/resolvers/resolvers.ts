// Resolvers define the technique for fetching the types defined in the
// schema.
import * as scalars from './scalars';

const resolvers = {
  ...scalars,
  Query: {
    users: async (_, __, { dataSources }) => dataSources.userAPI.getAllUsers()
  }
};

export { resolvers };
