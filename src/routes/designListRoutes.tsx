import { DesignListPage } from '@pages/designList/page';

import routePath from './routePath';

import { RouteType } from '@types';

const designListRoutes: RouteType[] = [
  {
    path: routePath.DESIGNLISTPAGE,
    element: <DesignListPage />,
  },
];

export default designListRoutes;
