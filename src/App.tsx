import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <p>cakey web 화이팅!!!!</p>;
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
};

export default App;
