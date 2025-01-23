import NotFound from '@pages/status/Error/NotFound';
import { StorePage } from '@pages/store/page';

import routePath from './routePath';

import { RouteType } from '@types';

const storeRoutes: RouteType[] = [
  {
    path: routePath.STOREPAGE,
    element: <StorePage />,
  },
  {
    path: routePath.STOREBASE,
    element: <NotFound />,
  },
];

export default storeRoutes;
