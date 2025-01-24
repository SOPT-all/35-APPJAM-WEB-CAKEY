export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isLoggedIn = () => {
  console.log(Boolean(getToken()))
  return Boolean(getToken());
};

export const removeUser = () => {
  return localStorage.clear;
};
