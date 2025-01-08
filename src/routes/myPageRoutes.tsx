import { MyPage } from '@pages/myPage/page';

import routePath from './routePath';

import { RouteType } from '@types';


const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
];

export default myPageRoutes;
