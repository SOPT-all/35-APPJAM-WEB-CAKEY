import { ToastProvider } from '@contexts';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { pageRoutes } from '@routes';

import queryClient from './queryClient';

import '@styles/global.css';

const router = createBrowserRouter(pageRoutes);

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
