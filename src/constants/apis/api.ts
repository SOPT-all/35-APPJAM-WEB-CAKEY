export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_STORE_COORDINATE_LIST: (station: string) =>
    `/api/v1/store/coordinate-list?station=${station}`,
  FETCH_STORE_STATIONS: '/api/v1/store/station',
  KAKAO_LOGIN: '/api/v1/user/login',
  FETCH_CAKE_RANK: '/api/v1/cake/rank',
} as const;
