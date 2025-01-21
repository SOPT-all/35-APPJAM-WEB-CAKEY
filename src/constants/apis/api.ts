export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const END_POINT = {
  FETCH_STORE_RANK: '/api/v1/store/rank',
  FETCH_DESIGN_LIST: (option: string, dayCategory: string, themeName: string) =>
    `/api/v1/cake/${option}?dayCategory=${dayCategory}&themeName=${themeName}`,
  FETCH_DESIGN_DETAIL: (
    cakeId: number,
    dayCategory: string,
    themeName: string
  ) =>
    `/api/v1/cake/${cakeId}/select?dayCategory=${dayCategory}&themeName=${themeName}`,
  KAKAO_LOGIN: '/api/v1/user/login',
} as const;
