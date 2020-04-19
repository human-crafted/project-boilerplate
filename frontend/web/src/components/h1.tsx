import React from 'react';

type Props = {
  children: React.ReactNode;
};

function H1({ children }: Props) {
  return <h1>{children}</h1>;
}

export { H1 };
