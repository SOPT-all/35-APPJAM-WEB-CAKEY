import { routePath } from '@routes';
import { useNavigate } from 'react-router-dom';

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
    goStorePage,
    goDesignListPage,
    goLoginPage,
  };
};

export default useEasyNavigate;
