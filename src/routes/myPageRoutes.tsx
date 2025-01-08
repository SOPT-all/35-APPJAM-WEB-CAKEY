import MyPage from '@pages/myPage/page';
import routePath from 'src/constants/routePath';
import { RouteType } from 'src/types/routeType';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MYPAGE,
    element: <MyPage />,
  },
];

export default myPageRoutes;
