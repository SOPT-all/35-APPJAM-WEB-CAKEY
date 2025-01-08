import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1,
      throwOnError: true,
      refetchOnWindowFocus: false, // 추후 true로 바꿀 예정
    },
  },
});

export default queryClient;
