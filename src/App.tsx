import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ToastProvider } from '@contexts';
import { StoreRankingButton } from '@pages/home/components';
import { pageRoutes } from '@routes';

import queryClient from './queryClient';

import '@styles/global.css';

const router = createBrowserRouter(pageRoutes);

const storeRankingData = {
  stores: [
    {
      storeId: 1,
      storeName: '케이꾸야',
      storeLikes: 130,
      station: '홍대입구역',
    },
    {
      storeId: 2,
      storeName: '서연이네 스윗 마카롱',
      storeLikes: 12,
      station: '종로3가역',
    },
    {
      storeId: 3,
      storeName: '채연이랑 달콤달콤',
      storeLikes: 43,
      station: '동대문역사문화공원역',
    },
    {
      storeId: 4,
      storeName: '화랑이는 감딸기',
      storeLikes: 546,
      station: '화랑대역',
    },
    {
      storeId: 5,
      storeName: '지유네 케이크집',
      storeLikes: 65,
      station: '태릉입구역',
    },
  ],
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <RouterProvider router={router} />
        <div>
          {storeRankingData.stores.map((store, index) => (
            <StoreRankingButton key={store.storeId} data={store} rank={index} />
          ))}
        </div>
      </ToastProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
