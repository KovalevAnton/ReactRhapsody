import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';

import Header from '@/widgets/Header';
import { useAuth } from '@/features/auth/api';
import Router from '@/app/router';

const queryClient = new QueryClient();

const App = () => {
  const { user, loading } = useAuth();

  if (loading) return <CircularProgress />;

  return (
    <QueryClientProvider client={queryClient}>
      <Header user={user} />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
