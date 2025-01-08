import HomePage from '@pages/home/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOMEPAGE,
    element: <HomePage />,
  },
];

export default homeRoutes;
