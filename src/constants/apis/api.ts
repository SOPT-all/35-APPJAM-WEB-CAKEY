export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_DESIGN_LIST: (daycategory: string, theme: string) =>
    `/api/v1/cake/latest?dayCategory=${daycategory}&themeName=ALL`,
  FETCH_DESIGN_DETAIL: (cakeId: number) => `/api/v1/cake/${cakeId}/select`,
  KAKAO_LOGIN: '/api/v1/user/login',
} as const;
