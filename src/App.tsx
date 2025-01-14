import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastProvider } from '@contexts';

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
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
