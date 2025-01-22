import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, OptionType, StationDesignResponse } from '@types';

const fetchLikedStoreDesign = async (
  order: OptionType,
  cakeIdCursor?: number,
  cakeLikesCursor?: number
): Promise<StationDesignResponse> => {
  try {
    const url = END_POINT.FETCH_LIKED_STORE_DESIGN_LIST(
      order,
      cakeIdCursor,
      cakeLikesCursor
    );
    const response =
      await instance.get<ApiResponseType<StationDesignResponse>>(url);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchLikedStoreDesign = (order: OptionType) => {
  return useInfiniteQuery<StationDesignResponse, Error>({
    queryKey: [queryKey.LIKED_STORE_DESIGN_LIST, order],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeIdCursor: number;
        cakeLikesCursor: number;
      };
      return fetchLikedStoreDesign(
        order,
        param.cakeIdCursor,
        param.cakeLikesCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : (lastPage.cakeIdCursor ?? undefined),
          cakeLikesCursor:
            'cakeLikesCursor' in lastPage
              ? lastPage.cakeLikesCursor
              : undefined,
        };
      }
      return null;
    },
    initialPageParam: { cakeIdCursor: undefined, cakeLikesCursor: undefined },
  });
};
