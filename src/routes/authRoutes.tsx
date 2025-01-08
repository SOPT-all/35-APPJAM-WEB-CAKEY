import { LoginPage } from '@pages/auth/page';
import { RouteType } from '@types';
import routePath from 'src/routes/routePath';

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGINPAGE,
    element: <LoginPage />,
  },
];

export default authRoutes;
