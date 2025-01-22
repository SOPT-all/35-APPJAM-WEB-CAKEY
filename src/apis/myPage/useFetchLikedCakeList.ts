import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, ErrorResponse, LikedCakeListResponse } from '@types';

const fetchLikesCardList = async (
  option: string,
  pageParam?: string
): Promise<LikedCakeListResponse> => {
  try {
    const endpoint = pageParam
      ? END_POINT.FETCH_LIKED_CAKE_LIST(option, pageParam)
      : END_POINT.FETCH_LIKED_CAKE_LIST(option);

    const response =
      await instance.get<ApiResponseType<LikedCakeListResponse>>(endpoint);
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.status === 404) {
      return {
        nextCakeIdCursor: -1,
        cakeCount: -1,
        isLastData: false,
        cakes: [],
      };
    }
    throw error;
  }
};

export const useFetchLikedCakeList = (option: string, pageParam?: string) => {
  return useQuery({
    queryKey: [queryKey.LIKED_CAKE_LIST, option, pageParam],
    queryFn: () => fetchLikesCardList(option, pageParam || ''),
  });
};
