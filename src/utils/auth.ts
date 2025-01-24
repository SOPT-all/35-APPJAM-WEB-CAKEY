export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isLoggedIn = () => {
  return Boolean(getToken());
};

export const removeUser = () => {
  return localStorage.clear();
};
