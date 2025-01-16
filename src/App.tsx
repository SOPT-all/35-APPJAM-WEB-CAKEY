import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ToastProvider } from '@contexts';
import { MyPage } from '@pages/myPage/page';
// import { pageRoutes } from '@routes';

import '@styles/global.css';
import queryClient from './queryClient';
import pageRoutes from './routes/pageRoutes';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <RouterProvider router={router} />
        <MyPage />
      </ToastProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
