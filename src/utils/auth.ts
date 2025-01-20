export const getToken = () => {
  return localStorage.getItem('user');
};

export const isLoggedIn = () => {
  return getToken() ? true : false;
};
