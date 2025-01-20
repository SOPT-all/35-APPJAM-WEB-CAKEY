const authPages = {
  LOGINPAGE: '/login',
  KAKAO_REDIRECTION: '/kakao/redirection',
};

const homePages = {
  HOMEPAGE: '/',
};

const designListPages = {
  DESIGNLISTPAGE: '/design-list',
};

const myPages = {
  MYPAGE: '/mypage',
  LIKELISTPAGE: '/mypage/like-list',
};

const storePages = {
  STOREBASE: '/store',
  STOREPAGE: '/store/:id',
};

const viewPages = {
  VIEWPAGE: '/view',
};

export default {
  ...authPages,
  ...homePages,
  ...designListPages,
  ...myPages,
  ...storePages,
  ...viewPages,
};
