import { useNavigate } from 'react-router-dom';

import routePath from 'src/routes/routePath';

import { CategoryType } from '@types';

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

  const goLikeListPage = () => {
    navigate(routePath.LIKELISTPAGE);
  };

  const goLikeListPageByTab = (tap: string) => {
    navigate(routePath.LIKELISTPAGE, { state: { tap } });
  };

  const goStorePage = (storeId: number) => {
    navigate(routePath.STOREPAGE.replace(':id', String(storeId)));
  };

  const goStorePageByCakeId = (storeId: number, cakeId: number) => {
    navigate(routePath.STOREPAGE.replace(':id', String(storeId)), {
      state: { cakeId },
    });
  };

  const goDesignListPage = (category: CategoryType) => {
    navigate(routePath.DESIGNLISTPAGE, { state: { category } });
  };

  const goLoginPage = () => {
    navigate(routePath.LOGINPAGE);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    goHomePage,
    goViewPage,
    goMyPage,
    goLikeListPage,
    goLikeListPageByTab,
    goStorePage,
    goStorePageByCakeId,
    goDesignListPage,
    goLoginPage,
    goBack,
  };
};

export default useEasyNavigate;
