import { StorePage } from '@pages/store/page';

import { Error } from '@pages/status';

import routePath from './routePath';

import { RouteType } from '@types';

const storeRoutes: RouteType[] = [
  {
    path: routePath.STOREPAGE,
    element: <StorePage />,
  },
  {
    path: routePath.STOREBASE,
    element: <Error />,
  },
];

export default storeRoutes;
