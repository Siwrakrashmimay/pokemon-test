'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '@graphql/client';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
