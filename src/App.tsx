import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    <>
      <RouterProvider router={router} />
      <p>cakey web 화이팅!!!!</p>
    </>
  );
};

export default App;
