import { LoginPage, Redirection } from '@pages/auth/page';

import routePath from './routePath';

import { RouteType } from '@types';

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
  {
    path: routePath.KAKAO_REDIRECTION,
    element: <Redirection />,
  },
];

export default authRoutes;
