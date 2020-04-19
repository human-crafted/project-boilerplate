import { UsersAPI } from '../users';
import { mockUserResponse, mockUser } from '../mock-users';

const mocks = {
  get: jest.fn()
};

const ds = new UsersAPI();
// @ts-ignore
ds.get = mocks.get;

describe('[UsersAPI.userReducer]', () => {
  it('properly transforms user', () => {
    expect(ds.userReducer(mockUserResponse)).toEqual(mockUser);
  });
});

describe('[UsersAPI.getAllUsers]', () => {
  it('looks up users from api', async () => {
    // if api response is list of raw users,
    // res should be list of transformed users
    mocks.get.mockReturnValueOnce({ items: [mockUserResponse] });
    const res = await ds.getAllUsers();

    expect(res).toEqual([mockUser]);
    // TODO Uncomment for when hitting real API
    // expect(mocks.get).toBeCalledWith('users');
  });
});

export { mockUser, mockUserResponse };
