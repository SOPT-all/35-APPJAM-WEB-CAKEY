import { StorePage } from '@pages/store/page';
import { RouteType } from '@types';
import routePath from 'src/routes/routePath';

const storeRoutes: RouteType[] = [
  {
    path: routePath.STOREPAGE,
    element: <StorePage />,
  },
];

export default storeRoutes;