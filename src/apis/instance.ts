import axios from 'axios';

import { BASE_URL } from '@constants';

export const instance = axios.create({
  baseURL: BASE_URL,

  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorCodes = [40410, 40420, 40422, 40423, 40424, 40431];

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
