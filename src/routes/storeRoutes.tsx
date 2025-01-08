import StorePage from '@pages/store/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const storeRoutes: RouteType[] = [
  {
    path: routePath.STOREPAGE,
    element: <StorePage />,
  },
];

export default storeRoutes;
