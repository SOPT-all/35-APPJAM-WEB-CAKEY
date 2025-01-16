import { RouteObject } from 'react-router-dom';

import {
  authRoutes,
  designListRoutes,
  homeRoutes,
  myPageRoutes,
  storeRoutes,
  viewRoutes,
} from '@routes';

import Layout from './layout/Layout';


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
