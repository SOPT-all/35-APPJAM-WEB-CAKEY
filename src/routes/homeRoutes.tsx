import { HomePage } from '@pages/home/page';
import { RouteType } from '@types';
import routePath from 'src/routes/routePath';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOMEPAGE,
    element: <HomePage />,
  },
];

export default homeRoutes;