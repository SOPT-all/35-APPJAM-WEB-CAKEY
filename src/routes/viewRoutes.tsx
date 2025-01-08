import { ViewPage } from '@pages/view/page';

import routePath from './routePath';

import { RouteType } from '@types';


const veiwRoutes: RouteType[] = [
  {
    path: routePath.VIEWPAGE,
    element: <ViewPage />,
  },
];

export default veiwRoutes;
