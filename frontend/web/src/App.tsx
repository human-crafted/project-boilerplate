import React from 'react';
import { Navigation } from './navigation';
import { WithTheme } from './theme';

function App() {
  return (
    <WithTheme>
      <Navigation />
    </WithTheme>
  );
}

export { App };
