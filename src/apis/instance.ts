import axios from 'axios';

import { BASE_URL } from '@constants';
import { getToken, removeUser } from '@utils';

export const instance = axios.create({
  baseURL: BASE_URL,

  withCredentials: true,

  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : ''}`,
  },
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorCodes = [40410, 40420, 40422, 40423, 40424, 40431];

    if (error.response?.status === 401) {
      removeUser();
    }

    if (errorCodes.includes(error.response?.data?.code)) {
      return Promise.resolve({ data: null });
    }

    return Promise.reject(error);
  }
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}
