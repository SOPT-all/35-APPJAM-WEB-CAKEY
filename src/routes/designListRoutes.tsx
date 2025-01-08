import { DesignListPage } from '@pages/designList/page';
import { RouteType } from '@types';
import routePath from './routePath';

const designListRoutes: RouteType[] = [
  {
    path: routePath.DESIGNLISTPAGE,
    element: <DesignListPage />,
  },
];

export default designListRoutes;
