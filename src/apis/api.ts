import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,

  withCredentials: true,

  // headers: {
  //   // Authorization: `Bearer 엑세스 토큰`,
  // }, 서버에서 set-cookie로 줘서 만약 필요 없으면 지울 예정
});

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
