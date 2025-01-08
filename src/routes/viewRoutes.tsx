import ViewPage from '@pages/view/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const veiwRoutes: RouteType[] = [
  {
    path: routePath.VIEWPAGE,
    element: <ViewPage />,
  },
];

export default veiwRoutes;
