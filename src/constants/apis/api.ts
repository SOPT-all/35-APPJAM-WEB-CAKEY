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
  FETCH_STATION_DESIGN_LIST: (
    order: OrderType,
    station: string,
    cakeLikesCursor?: number,
    cakeIdCursor?: number
  ) => {
    const url = `/api/v1/cake/station/${order}?station=${station}`;
    if (
      order === 'popularity' &&
      cakeIdCursor !== undefined &&
      cakeLikesCursor !== undefined
    ) {
      return `${url}?cakeLikesCursor=${cakeLikesCursor}&cakeIdCursor=${cakeIdCursor}`;
    } else if (cakeIdCursor !== undefined)
      return `${url}&cakeIdCursor=${cakeIdCursor}`;
    return url;
  },
  FETCH_STATION_STORE_LIST: (
    order: OrderType,
    station: string,
    storeLikesCursor?: number,
    storeIdCursor?: number
  ) => {
    const url = `/api/v1/store/${order}?station=${station}`;
    if (
      order === 'popularity' &&
      storeIdCursor !== undefined &&
      storeLikesCursor !== undefined
    ) {
      return `${url}?likesCursor=${storeLikesCursor}&lastStoreId=${storeIdCursor}`;
    } else if (storeIdCursor !== undefined)
      return `${url}&storeIdCursor=${storeIdCursor}`;
    return url;
  },
  FETCH_LIKED_STORE_DESIGN_LIST: (
    order: OrderType,
    station: string,
    cakeIdCursor?: number,
    cakeLikesCursor?: number
  ) => {
    const url = `/api/v1/cake/store/likes/cake/${order}`;
    if (
      order === 'popularity' &&
      cakeIdCursor !== undefined &&
      cakeLikesCursor !== undefined
    ) {
      return `${url}?cakeIdCursor=${cakeIdCursor}&cakeLikesCursor=${cakeLikesCursor}`;
    } else if (cakeIdCursor) return `${url}?cakeIdCursor=${cakeIdCursor}`;
    return url;
  },
  POST_CAKE_LIKES: (cakeId: number) => `/api/v1/cake/likes/${cakeId}`,
  POST_STORE_LIKES: (storeId: number) => `/api/v1/store/likes/${storeId}`,
  // POST_CAKE_LIKES: (cakeId: number) => `/api/v1/cake/likes/${cakeId}`,
  // POST_STORE_LIKES: (storeId: number) => `/api/v1/store/likes/${storeId}`,
  // DELETE_CAKE_LIKES: (cakeId: number) => `/api/v1/cake/likes/${cakeId}`,
  // DELETE_STORE_LIKES: (storeId: number) => `/api/v1/store/likes/${storeId}`
  POST_LIKE: (type: 'cake' | 'store', id: number) =>
    `/api/v1/${type}/likes/${id}`,
  DELETE_LIKE: (type: 'cake' | 'store', id: number) =>
    `/api/v1/${type}/likes/${id}`,
} as const;

export type OrderType = 'latest' | 'popularity';
