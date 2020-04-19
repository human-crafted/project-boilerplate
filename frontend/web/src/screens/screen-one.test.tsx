import React from 'react';
import { render } from '@testing-library/react';
import { One } from './screen-one';

test('renders learn react link', () => {
  const { getByText } = render(<One />);
  const linkElement = getByText(/Screen One/i);
  expect(linkElement).toBeInTheDocument();
});
