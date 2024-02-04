import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from '@/app/components/Header';
import { useAuth } from '@/features/auth/api';
import Router from '@/shared/router';

const queryClient = new QueryClient();

const App = () => {
  const { user } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <Header user={user} />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
