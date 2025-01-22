export const getToken = () => {
  return localStorage.getItem('user');
};

export const isLoggedIn = () => {
  return Boolean(getToken());
};

export const removeUser = () => {
  return localStorage.removeItem('user');
};
