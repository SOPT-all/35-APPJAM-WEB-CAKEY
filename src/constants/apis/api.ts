export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_STORE_INFO: (storeId: number) => `/api/v1/store/${storeId}/select`,
  FETCH_STORE_DETAIL_DESIGN: (storeId: number) =>
    `/api/v1/store/${storeId}/design`,
  FETCH_STORE_DETAIL_SIZE: (storeId: number) => `/api/v1/store/${storeId}/size`,
  FETCH_STORE_DETAIL_INFO: (storeId: number) =>
    `/api/v1/store/${storeId}/information`,
  FETCH_STORE_LINK: (storeId: number) => `/api/v1/store/${storeId}/kakaoLink`,
} as const;
