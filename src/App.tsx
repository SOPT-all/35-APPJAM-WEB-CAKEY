import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Input } from '@components';
import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';

import queryClient from './queryClient';

import '@styles/global.css';

const allRoutes = [
  ...authRoutes,
  ...designListRoutes,
  ...homeRoutes,
  ...myPageRoutes,
  ...storeRoutes,
  ...viewRoutes,
];

const router = createBrowserRouter(allRoutes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
        <Input
          inputLabel={'안녕'}
          value={''}
          onChange={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </QueryClientProvider>
  );
};

export default App;
