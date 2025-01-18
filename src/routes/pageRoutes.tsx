import { RouteObject } from 'react-router-dom';

import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myListRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';

import Layout from './Layout/Layout';

const allRoutes = [
  ...authRoutes,
  ...designListRoutes,
  ...homeRoutes,
  ...myPageRoutes,
  ...storeRoutes,
  ...viewRoutes,
  ...myListRoutes,
];

const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: allRoutes,
  },
];

export default pageRoutes;
