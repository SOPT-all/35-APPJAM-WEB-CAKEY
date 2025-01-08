import { LoginPage } from '@pages/auth/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
];

export default authRoutes;
