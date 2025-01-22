export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  KAKAO_LOGIN: '/api/v1/user/login',
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_DESIGN_LIST: (option: string, dayCategory: string, themeName: string) =>
    `/api/v1/cake/${option}?dayCategory=${dayCategory}&themeName=${themeName}`,
  FETCH_DESIGN_DETAIL: (
    cakeId: number,
    dayCategory: string,
    themeName: string
  ) =>
    `/api/v1/cake/select/${cakeId}?dayCategory=${dayCategory}&themeName=${themeName}`,
  FETCH_LIKED_STORE_LIST: (option: string, pageParam?: string) =>
    pageParam
      ? `/api/v1/store/likes/${option}?storeIdCursor=${pageParam}`
      : `/api/v1/store/likes/${option}`,
  FETCH_STORE_COORDINATE_LIST: (station: string) =>
    `/api/v1/store/coordinate-list?station=${station}`,
  FETCH_SELECT_STORE_COORDINATE: (storeId: number) =>
    `/api/v1/store/${storeId}/select/coordinate`,
  FETCH_LIKES_STORE_COORDINATE_LIST: '/api/v1/store/likes/coordinate',
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
  POST_LIKE: (type: 'cake' | 'store', id: number) =>
    `/api/v1/${type}/likes/${id}`,
  DELETE_LIKE: (type: 'cake' | 'store', id: number) =>
    `/api/v1/${type}/likes/${id}`,
  FETCH_CAKE_LIKES_LATEST: '/api/v1/cake/likes/latest',
} as const;
