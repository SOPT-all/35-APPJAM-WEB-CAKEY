import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  DesignCardListType,
  ErrorResponse,
  OptionType,
} from '@types';

const fetchLikesCardList = async (
  option: OptionType,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<DesignCardListType> => {
  try {
    const url = END_POINT.FETCH_LIKED_CAKE_LIST(
      option,
      cakeLikesCursor,
      cakeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<DesignCardListType>>(url);
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

export const useFetchLikedCakeList = (
  option: OptionType,
  isEnabled: boolean
) => {
  return useInfiniteQuery<DesignCardListType, Error>({
    queryKey: [queryKey.LIKED_CAKE_LIST, option],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };

      console.log(param);
      return fetchLikesCardList(
        option,
        param.cakeLikesCursor,
        param.cakeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeLikesCursor:
            'nextLikeCursor' in lastPage ? lastPage.nextLikeCursor : undefined,
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : (lastPage.cakeIdCursor ?? undefined),
        };
      }
      return null;
    },
    initialPageParam: { cakeLikesCursor: undefined, cakeIdCursor: undefined },
    enabled: isEnabled,
  });
};
