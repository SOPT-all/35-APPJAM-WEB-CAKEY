import { RouteObject } from 'react-router-dom';
import Layout from './layout/Layout';

import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';

const allRoutes = [
  ...authRoutes,
  ...designListRoutes,
  ...homeRoutes,
  ...myPageRoutes,
  ...storeRoutes,
  ...viewRoutes,
];

const pageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: allRoutes,
  },
];

export default pageRoutes;
