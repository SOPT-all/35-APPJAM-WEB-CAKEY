import { ViewPage } from '@pages/view/page';
import { RouteType } from '@types';
import routePath from 'src/routes/routePath';

const veiwRoutes: RouteType[] = [
  {
    path: routePath.VIEWPAGE,
    element: <ViewPage />,
  },
];

export default veiwRoutes;
