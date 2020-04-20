import React from 'react';
import { render } from '@testing-library/react';
import { One } from './screen-one';
import { WithTheme } from '../theme';

test('renders learn react link', () => {
  const { getByText } = render(
    <WithTheme>
      <One />
    </WithTheme>
  );
  const linkElement = getByText(/Screen One/i);
  expect(linkElement).toBeInTheDocument();
});
