import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Input } from '@components';
import { ToastProvider } from '@contexts';
import { pageRoutes } from '@routes';

import queryClient from './queryClient';

import '@styles/global.css';

const router = createBrowserRouter(pageRoutes);

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <RouterProvider router={router} />
        <Input
          inputLabel={'텍스트'}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={'입력하세요'}
        />
      </ToastProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
