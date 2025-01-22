import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, OrderType, queryKey } from '@constants';

import {
  ApiResponseType,
  StationDesignResponse,
  DesignPopularityResponse,
} from '@types';

type OrderTypeResponse<T extends OrderType> = T extends 'latest'
  ? StationDesignResponse
  : T extends 'popularity'
    ? DesignPopularityResponse
    : never;

const fetchLikedStoreDesign = async <T extends OrderType>(
  order: T,
  cakeIdCursor?: number,
  cakeLikesCursor?: number
): Promise<OrderTypeResponse<T>> => {
  try {
    const url = END_POINT.FETCH_LIKED_STORE_DESIGN_LIST(
      order,
      cakeIdCursor,
      cakeLikesCursor
    );

    const response =
      await instance.get<ApiResponseType<OrderTypeResponse<T>>>(url);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchLikedStoreDesign = <T extends OrderType>(order: T) => {
  return useInfiniteQuery<OrderTypeResponse<T>, Error>({
    queryKey: [queryKey.LIKED_STORE_DESIGN_LIST, order],
    queryFn: ({ pageParam = { cakeIdCursor: 0, cakeLikesCursor: 0 } }) => {
      console.log(pageParam);
      return fetchLikedStoreDesign(
        order,
        pageParam.cakeIdCursor,
        pageParam.cakeLikesCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : lastPage.cakeIdCursor,
          cakeLikesCursor:
            'cakeIdCursor' in lastPage ? lastPage.cakeLikesCursor : undefined,
        };
      }
      return null;
    },
    initialPageParam: { cakeIdCursor: 0, cakeLikesCursor: 0 },
  });
};
