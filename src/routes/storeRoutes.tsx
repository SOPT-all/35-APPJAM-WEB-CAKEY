import { StorePage } from '@pages/store/page';

import routePath from './routePath';

import { RouteType } from '@types';


const storeRoutes: RouteType[] = [
  {
    path: routePath.STOREPAGE,
    element: <StorePage />,
  },
];

export default storeRoutes;
