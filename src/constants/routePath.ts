const authPages = {
  LOGINPAGE: '/login',
};

const homePages = {
  HOMEPAGE: '/',
};

const designListPages = {
  DESIGNLISTPAGE: '/design-list',
};

const myPages = {
  MYPAGE: '/mypage',
};

const storePages = {
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
