import { MyPage } from '@pages/myPage/page';
import { RouteType } from '@types';
import routePath from 'src/constants/routePath';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
];

export default myPageRoutes;
