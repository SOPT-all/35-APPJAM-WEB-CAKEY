import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, OrderType, queryKey } from '@constants';
import {
  ApiResponseType,
  DesignPopularityResponse,
  StationDesignResponse,
} from '@types';

type OrderTypeResponse<T extends OrderType> = T extends 'latest'
  ? StationDesignResponse
  : T extends 'popularity'
    ? DesignPopularityResponse
    : never;

const fetchStationDesign = async <T extends OrderType>(
  order: T,
  station: string,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<OrderTypeResponse<T>> => {
  try {
    const url = END_POINT.FETCH_STATION_DESIGN_LIST(
      order,
      station,
      cakeLikesCursor,
      cakeIdCursor
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

export const useFetchStationDesign = <T extends OrderType>(
  order: T,
  station: string
) => {
  return useInfiniteQuery<OrderTypeResponse<T>, Error>({
    queryKey: [queryKey.STATION_DESIGN_LIST, order, station],
    queryFn: ({
      pageParam = { cakeLikesCursor: undefined, cakeIdCursor: undefined },
    }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };
      return fetchStationDesign(
        order,
        station,
        param.cakeLikesCursor,
        param.cakeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeLikesCursor:
            'cakeLikesCursor' in lastPage
              ? lastPage.cakeLikesCursor
              : undefined,
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : lastPage.cakeIdCursor,
        };
      }
      return null;
    },
    initialPageParam: { cakeLikesCursor: undefined, cakeIdCursor: undefined },
  });
};
