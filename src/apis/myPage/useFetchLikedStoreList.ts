import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, ErrorResponse, LikedStoreListResponse } from '@types';

const fetchLikedStoreList = async (
  option: string,
  pageParam?: string
): Promise<LikedStoreListResponse> => {
  try {
    const endpoint = pageParam
      ? END_POINT.FETCH_LIKED_STORE_LIST(option, pageParam)
      : END_POINT.FETCH_LIKED_STORE_LIST(option);

    const response =
      await instance.get<ApiResponseType<LikedStoreListResponse>>(endpoint);
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.status === 404) {
      return {
        nextStoreIdCursor: -1,
        nextLikesCursor: undefined,
        storeCount: 0,
        stores: [], // 빈 배열 반환
      };
    }
    throw error;
  }
};

export const useFetchLikedStoreList = (
  option: string,

  pageParam?: string
) => {
  return useQuery({
    queryKey: [queryKey.LIKED_STORE_LIST, option, pageParam],
    queryFn: () => fetchLikedStoreList(option, pageParam || ''),
  });
};
