export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_STORE_RANK: '/api/v1/store/rank',
  KAKAO_LOGIN: '/api/v1/user/login',
  FETCH_CAKE_RANK: '/api/v1/cake/rank',
} as const;
