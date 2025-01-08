import { DesignListPage } from '@pages/designList/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const designListRoutes: RouteType[] = [
  {
    path: routePath.DESIGNLISTPAGE,
    element: <DesignListPage />,
  },
];

export default designListRoutes;
