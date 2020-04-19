import { resolvers } from './resolvers';
import { mockUserResponse } from '../data-sources/mock-users';

describe('[Query.users]', () => {
  const mockContext = {
    dataSources: {
      userAPI: { getAllUsers: jest.fn() }
    }
  };
  const { getAllUsers } = mockContext.dataSources.userAPI;

  it('calls getAllUsers from userAPI', async () => {
    // Note: these results get reversed in the resolver
    getAllUsers.mockReturnValueOnce({ items: [mockUserResponse] });

    // Check the resolver response
    const res = await resolvers.Query.users(null, {}, mockContext);
    expect(res).toEqual({
      items: [mockUserResponse]
    });
  });
});
