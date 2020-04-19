import gql from 'graphql-tag';
import { server } from '..';
import { startTestServer, toPromise } from './test-utils';

const GET_USERS = gql`
  query userList {
    users {
      id
      firstName
      lastName
      emailAddress
      country
      signUpDate
    }
  }
`;

describe('Server - e2e', () => {
  let stop;
  let graphql;

  beforeEach(async () => {
    const testServer = await startTestServer(server);
    stop = testServer.stop;
    graphql = testServer.graphql;
  });

  afterEach(() => stop());

  it('Gets list of users', async () => {
    const res = await toPromise(
      graphql({
        query: GET_USERS
      })
    );
    expect(res).toMatchSnapshot();
  });
});
