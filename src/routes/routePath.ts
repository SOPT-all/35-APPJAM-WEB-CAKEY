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

const myList = {
  MYLIST: '/my-list',
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
  ...myList,
  ...storePages,
  ...viewPages,
};
