import { MyList } from '@pages/myPage/page';

import routePath from './routePath';

import { RouteType } from '@types';

const myListRoutes: RouteType[] = [
  {
    path: routePath.MYLIST,
    element: <MyList />,
  },
];

export default myListRoutes;
