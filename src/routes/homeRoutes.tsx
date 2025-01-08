import { HomePage } from '@pages/home/page';

import routePath from './routePath';

import { RouteType } from '@types';

const homeRoutes: RouteType[] = [
  {
    path: routePath.HOMEPAGE,
    element: <HomePage />,
  },
];

export default homeRoutes;
