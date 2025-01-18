import { MyPage } from '@pages/myPage/page';
import LikeListPage from '@pages/myPage/page/MyList/LikeListPage';

import routePath from './routePath';

import { RouteType } from '@types';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
  {
    path: routePath.LIKELISTPAGE,
    element: <LikeListPage />,
  },
];

export default myPageRoutes;
