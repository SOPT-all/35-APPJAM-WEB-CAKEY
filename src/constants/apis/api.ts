export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  KAKAO_LOGIN: '/api/v1/user/login',
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_STORE_COORDINATE_LIST: (station: string) =>
    `/api/v1/store/coordinate-list?station=${station}`,
  FETCH_STORE_STATIONS: '/api/v1/store/station',
  FETCH_STORE_INFO: (storeId: number) => `/api/v1/store/select/${storeId}`,
  FETCH_STORE_DETAIL_DESIGN: (storeId: number) =>
    `/api/v1/store/design/${storeId}`,
  FETCH_STORE_DETAIL_SIZE: (storeId: number) => `/api/v1/store/${storeId}/size`,
  FETCH_STORE_DETAIL_INFO: (storeId: number) =>
    `/api/v1/store/${storeId}/information`,
  FETCH_STORE_LINK: (storeId: number) => `/api/v1/store/kakaoLink/${storeId}`,
  FETCH_USER: '/api/v1/user',
  FETCH_CAKE_RANK: '/api/v1/cake/rank',
  POST_CAKE_LIKES: (cakeId: number) => `/api/v1/cake/likes/${cakeId}`,
  POST_STORE_LIKES: (storeId: number) => `/api/v1/store/likes/${storeId}`,
  DELETE_CAKE_LIKES: (cakeId: number) => `/api/v1/cake/likes/${cakeId}`,
  DELETE_STORE_LIKES: (storeId: number) => `/api/v1/store/likes/${storeId}`
} as const;
