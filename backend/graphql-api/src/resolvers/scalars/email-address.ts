// https://github.com/Urigo/graphql-scalars/blob/master/src/resolvers/EmailAddress.ts

import { GraphQLScalarType } from 'graphql/type/definition';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

const EMAIL_ADDRESS_REGEX = new RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const EmailAddress = new GraphQLScalarType({
  name: 'EmailAddress',

  description:
    'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',

  serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError(`Value is not string: ${value}`);
    }

    if (!EMAIL_ADDRESS_REGEX.test(value)) {
      throw new TypeError(`Value is not a valid email address: ${value}`);
    }

    return value;
  },

  parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string');
    }

    if (!EMAIL_ADDRESS_REGEX.test(value)) {
      throw new TypeError(`Value is not a valid email address: ${value}`);
    }

    return value;
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as email addresses but got a: ${ast.kind}`
      );
    }

    if (!EMAIL_ADDRESS_REGEX.test(ast.value)) {
      throw new TypeError(`Value is not a valid email address: ${ast.value}`);
    }

    return ast.value;
  }
});

export { EmailAddress };
