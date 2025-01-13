import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';

import Tab from './components/common/Tab/Tab';
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
        <Tab tabType={'viewMyPage'} />
        <Tab tabType={'store'} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
