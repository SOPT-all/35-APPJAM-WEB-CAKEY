import { useNavigate } from 'react-router-dom';

import routePath from 'src/routes/routePath';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate(routePath.HOMEPAGE);
  };

  const goViewPage = () => {
    navigate(routePath.VIEWPAGE);
  };

  const goMyPage = () => {
    navigate(routePath.MYPAGE);
  };

  const goMyList = () => {
    navigate(routePath.MYLIST);
  };

  const goStorePage = () => {
    navigate(routePath.STOREPAGE);
  };

  const goDesignListPage = () => {
    navigate(routePath.DESIGNLISTPAGE);
  };

  const goLoginPage = () => {
    navigate(routePath.LOGINPAGE);
  };

  return {
    goHomePage,
    goViewPage,
    goMyPage,
    goMyList,
    goStorePage,
    goDesignListPage,
    goLoginPage,
  };
};

export default useEasyNavigate;
