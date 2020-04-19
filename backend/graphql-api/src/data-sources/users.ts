import { RESTDataSource } from 'apollo-datasource-rest';
import { mockUserResponse } from './mock-users';

/*
  Ideally you should auto generate types
  here from the API you are hitting
 */

type User = {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  country: string;
  signUpDate: string;
};

type UsersResponse = {
  items: User[];
};

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'URL HERE';
  }

  /*
		This reducer allows you to map the returned response
		to something more useful in this domain.
	 */
  // eslint-disable-next-line class-methods-use-this
  userReducer(user: User) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailAddress: user.emailAddress,
      country: user.country,
      signUpDate: user.signUpDate
    };
  }

  /**
   * @description Fetches a list of all users
   * @return {response.items | null} users from within items array or null.
   */
  async getAllUsers() {
    // eslint-disable-next-line no-useless-catch
    try {
      // The below would be the real implementation hitting an API
      // const response = await this.get<UsersResponse>('users');
      const response = {
        items: [mockUserResponse]
      };
      if (
        response.items &&
        Array.isArray(response.items) &&
        response.items.length !== 0
      ) {
        return response.items.map((user) => this.userReducer(user));
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
}

export { UsersAPI };
