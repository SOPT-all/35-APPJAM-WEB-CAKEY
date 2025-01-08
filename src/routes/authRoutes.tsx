import { LoginPage } from '@pages/auth/page';

import routePath from './routePath';

import { RouteType } from '@types';


const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
];

export default authRoutes;
